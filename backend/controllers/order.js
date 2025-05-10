const Razorpay = require("razorpay");
const Order = require("../models/order");
const Product = require("../models/product");
const User = require("../models/user");

require("dotenv").config();

const razorpay = new Razorpay({
  key_id: process.env.KEY_API,
  key_secret: process.env.KET_SECRET,
});

exports.createOrder = async (req, res) => {
  const { userId, items } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).send("User not found");

    let totalAmount = 0;
    const validatedItems = [];

    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) return res.status(404).send(`Product ${item.productId} not found`);

      totalAmount += product.price * item.quantity;
      validatedItems.push({
        product: product._id,
        quantity: item.quantity,
      });
    }

    const options = {
      amount: totalAmount * 100,
      currency: "INR",
      receipt: `order_rcptid_${Date.now()}`,
    };

    const razorpayOrder = await razorpay.orders.create(options);

    const newOrder = new Order({
      user: user._id,
      items: validatedItems,
      amount: totalAmount,
      razorpayOrderId: razorpayOrder.id,
    });

    await newOrder.save();
    res.json({ razorpayOrderId: razorpayOrder.id });
  } catch (err) {
    console.error(err);
    res.status(500).send("Order creation failed");
  }
};

exports.verifyPayment = async (req, res) => {
  const { razorpayOrderId, razorpayPaymentId } = req.body;

  try {
    const order = await Order.findOne({ razorpayOrderId });
    if (!order) return res.status(404).send("Order not found");

    order.paymentStatus = "paid";
    order.razorpayPaymentId = razorpayPaymentId;
    await order.save();

    res.json({ message: "Payment successful" });
  } catch (err) {
    res.status(500).send("Payment verification failed");
  }
};