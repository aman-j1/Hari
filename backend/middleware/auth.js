// middleware/auth.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SecretKey = process.env.SECURITY_KEY;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access denied: Token missing or invalid' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SecretKey);
    req.user = decoded; // contains email, role, etc.
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token', error: err.message });
  }
};

module.exports = verifyToken;
