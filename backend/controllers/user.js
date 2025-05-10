const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const { OAuth2Client } = require('google-auth-library');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const OTP_SECRET = process.env.OTP_SECRET || 'otp-secret';
const verifyToken = require('../middleware/auth');

const SecretKey = process.env.SECURITY_Key;
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

console.log(SecretKey);

function generateToken(user) {
    const payload = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        googleId: user.googleId,
        role: user.role
    };
    return jwt.sign(payload, SecretKey, { expiresIn: '2h' });
}

exports.register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const userExist = await UserModel.findOne({ email });
        if (userExist) return res.status(400).send({ message: 'User Already Exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            role: 'user'
        });

        const saveUser = await newUser.save();
        res.status(201).send({ message: "Registration Successful", saveUser });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Error occurred' });
    }
}

exports.googleLogin = async (req, res) => {
    try {
        res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
        const { token } = req.body;

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const { email, given_name: firstName, family_name: lastName, sub: googleId } = payload;

        let user = await UserModel.findOne({ email }).populate('cart.productId');
        if (!user) {
            user = new UserModel({
                firstName,
                lastName,
                email,
                googleId,
                password: '',
                role: 'user'
            });
            await user.save();
        }

        const jwtToken = generateToken(user);

        res.status(200).json({
            message: "Google login successful",
            token: jwtToken,
            userData: {
                ...user.toObject(),
                role: user.role,
                cart: user.cart
            },
        });
    } catch (error) {
        console.error("Error during Google login:", error);
        res.status(500).json({ message: "Server error" });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email }).populate('cart.productId');
        if (!user) return res.status(400).json({ message: "User not found" });

        if (!password || !user.password) return res.status(400).json({ message: 'Missing credentials' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).json({ message: 'Invalid password' });

        const jwtToken = generateToken(user);

        res.status(200).json({
            message: "Login successful",
            token: jwtToken,
            userData: {
                ...user.toObject(),
                role: user.role,
                cart: user.cart
            }
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Server error" });
    }
}

exports.sendOtp = async (req, res) => {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const otp = crypto.randomInt(100000, 999999);
    const otpToken = jwt.sign({ email, otp }, OTP_SECRET, { expiresIn: '2m' });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP for password reset',
        text: `Your OTP is: ${otp}. It expires in 2 minutes.`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'OTP sent', token: otpToken });
    } catch (err) {
        res.status(500).json({ message: 'Failed to send OTP', error: err.message });
    }
}

exports.verifyOtp = async (req, res) => {
    const { otp, token, newPassword } = req.body;

    try {
        const decoded = jwt.verify(token, OTP_SECRET);
        if (decoded.otp.toString() !== otp.toString()) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await UserModel.findOneAndUpdate({ email: decoded.email }, { password: hashedPassword });

        res.status(200).json({ message: 'Password reset successful' });
    } catch (err) {
        res.status(400).json({ message: 'OTP expired or invalid', error: err.message });
    }
}

exports.getUserCart = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await UserModel.findById(userId)
      .populate('cart.productId');

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      cart: user.cart
    });
  } catch (error) {
    console.error("Get cart error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
