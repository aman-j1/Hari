import React, { useState } from "react";
import axios from "axios";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [userId, setUserId] = useState("");
  const [items, setItems] = useState([{ productId: "", quantity: 1 }]);
  const [orderId, setOrderId] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleBillingSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://hari-1-cbck.onrender.com/api/create-order", {
        userId,
        items,
      });
      setOrderId(res.data.razorpayOrderId);
      setStep(2);
    } catch (err) {
      alert("Order creation failed");
    }
  };

  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => alert("Failed to load Razorpay SDK");
    document.body.appendChild(script);
    script.onload = openRazorpayModal;
  };

  const openRazorpayModal = () => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY, // frontend key
      amount: 1, // handled server-side
      currency: "INR",
      name: "Your Shop",
      description: "Test Transaction",
      order_id: orderId,
      handler: async function (response) {
        try {
          await axios.post("https://hari-1-cbck.onrender.com/api/verify-payment", {
            razorpayOrderId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
          });
          setPaymentSuccess(true);
          setStep(3);
        } catch (err) {
          alert("Payment verification failed");
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePayment = () => {
    loadRazorpay();
  };

  return (
    <div className="checkout">
      {step === 1 && (
        <form onSubmit={handleBillingSubmit}>
          <h2>Billing Info</h2>
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Product ID"
            value={items[0].productId}
            onChange={(e) =>
              setItems([{ ...items[0], productId: e.target.value }])
            }
            required
          />
          <input
            type="number"
            placeholder="Quantity"
            value={items[0].quantity}
            onChange={(e) =>
              setItems([{ ...items[0], quantity: parseInt(e.target.value) }])
            }
            required
          />
          <button type="submit">Next: Payment</button>
        </form>
      )}

      {step === 2 && (
        <div>
          <h2>Payment</h2>
          <p>Click below to pay</p>
          <button onClick={handlePayment}>Pay with Razorpay</button>
        </div>
      )}

      {step === 3 && paymentSuccess && (
        <div>
          <h2>Confirmation</h2>
          <p>Thank you! Your payment was successful.</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
