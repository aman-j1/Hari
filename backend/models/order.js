const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
    },
  ],
  amount: { type: Number, required: true },
  paymentStatus: { type: String, default: "pending" },
  razorpayOrderId: String,
  razorpayPaymentId: String,
  billingName: { type: String, required: true },
  billingPhone: { type: String, required: true },
  billingAddress: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
