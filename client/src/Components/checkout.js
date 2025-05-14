import React, { useState, useEffect } from "react";
import axios from "axios";

// Utility function to decode JWT (optional, if you need userId manually)
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [billingName, setBillingName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [items, setItems] = useState([{ productId: "", quantity: 1 }]);
  const [orderId, setOrderId] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Get JWT from localStorage and decode userId
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = parseJwt(token);
      setUserId(decoded?.id); // Adjust based on how userId is stored
    }
  }, []);

  const handleBillingSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      alert("User not authenticated");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "https://hari-1-cbck.onrender.com/api/create-order",
        {
          userId,
          billingName,
          billingAddress,
          phone,
          items,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

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
      key: process.env.REACT_APP_RAZORPAY_KEY, // Replace with your Razorpay public key
      amount: 1, // Amount is configured server-side
      currency: "INR",
      name: billingName || "Your Shop",
      description: "Test Transaction",
      order_id: orderId,
      prefill: {
        name: billingName,
        contact: phone,
      },
      handler: async function (response) {
        try {
          const token = localStorage.getItem("token");

          await axios.post(
            "https://hari-1-cbck.onrender.com/api/verify-payment",
            {
              razorpayOrderId: orderId,
              razorpayPaymentId: response.razorpay_payment_id,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

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
            placeholder="Billing Name"
            value={billingName}
            onChange={(e) => setBillingName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Billing Address"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
