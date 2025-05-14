import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./deals.css"

export const Deals = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [countdowns, setCountdowns] = useState({});
    const [copiedCode, setCopiedCode] = useState({});

    // handle copy
    const handleCopy = (id, text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedCode(prev => ({ ...prev, [id]: true }));

            // Reset back to original code text after 2 seconds
            setTimeout(() => {
                setCopiedCode(prev => ({ ...prev, [id]: false }));
            }, 4000);
        }).catch(err => {
            console.error("Failed to copy!", err);
        });
    };

    // Countdown calculation
    const calculateTimeLeft = (expiryDate) => {
        const expiry = new Date(expiryDate);
        const now = new Date();

        const difference = expiry.getTime() - now.getTime();
        if (difference <= 0) return null;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('https://hari-1-cbck.onrender.com/api/getAllDeals');
                const deals = res.data.deals;

                // Set products
                setProducts(deals);

                // Initialize countdowns
                const initialCountdowns = {};
                deals.forEach(deal => {
                    console.log("Fetched expiryDate:", deal.deal.expiryDate);
                    initialCountdowns[deal._id] = calculateTimeLeft(deal.deal.expiryDate);
                });
                setCountdowns(initialCountdowns);
            } catch (error) {
                console.error(error);
                setError("Failed to fetch products");
            }
        };

        fetchProducts();
    }, []);

    // Update countdowns every second
    useEffect(() => {
    const timer = setInterval(() => {
        setCountdowns((prevCountdowns) => {
            const updated = {};
            products.forEach(product => {
                const timeLeft = calculateTimeLeft(product.deal.expiryDate);
                updated[product._id] = timeLeft;
            });
            return updated;
        });
    }, 1000);

    return () => clearInterval(timer);
}, [products]);

    return (
        <>
            {products.length > 0 && (
                <section className="product__coupon-area porduct__offer pt-120">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-xl-6 col-md-6">
                                <div className="section__title-wrapper-13 mb-35">
                                    <h3 className="section__title-13">Deal of The Day</h3>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                                <div className="product__offer-btn mb-30 text-md-end">
                                    <a className="tp-btn" href="/shop">View All Products</a>
                                </div>
                            </div>
                        </div>

                        <div className="product__coupon-area pb-120">
                            <div className="container">
                                <div className="row">
                                    {products.map((product) => {
                                        const countdown = countdowns[product._id];
                                        if (!countdown) return null;
                                        return (
                                            <div className="col-xl-6" key={product._id}>
                                                <div className="product__coupon-item mb-30 p-relative d-md-flex justify-content-between align-items-center">
                                                    <span className="product__coupon-border"></span>
                                                    <div className="product__coupon-item-left d-sm-flex align-items-center">
                                                        <div className="product__coupon-thumb">
                                                            <Link to={`/product/${product._id}`}>
                                                                <img
                                                                    alt={product.title}
                                                                    loading="lazy"
                                                                    width="120"
                                                                    height="120"
                                                                    src={product.imageUrl}
                                                                />
                                                            </Link>
                                                        </div>
                                                        <div className="product__coupon-content">
                                                            <h3 className="product__coupon-title">{product.deal.dealName}</h3>
                                                            <p className="product__coupon-offer mb-15">
                                                                <span>{product.deal.discountPercent}%</span> Off
                                                            </p>
                                                            <div className="product__coupon-countdown">
                                                                <div className="product__coupon-countdown-inner">
                                                                    <ul>
                                                                        <li><span>{countdown.days || 0}</span> Day</li>
                                                                        <li><span>{countdown.hours || 0}</span> Hrs</li>
                                                                        <li><span>{countdown.minutes || 0}</span> Min</li>
                                                                        <li><span>{countdown.seconds || 0}</span> Sec</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product__coupon-item-right pl-20">
                                                        <div className="product__coupon-status mb-10 d-flex align-items-center">
                                                            <h4>Coupon <span className={product.deal.isActive ? 'active' : 'in-active'}>{product.deal.isActive ? 'Active' : 'Inactive'}</span></h4>
                                                            <div className="product__coupon-info-details">
                                                                <span>
                                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M9 1.5C4.99594 1.5 1.75 4.74594 1.75 8.75C1.75 12.7541 4.99594 16 9 16C13.0041 16 16.25 12.7541 16.25 8.75C16.25 4.74594 13.0041 1.5 9 1.5ZM0.25 8.75C0.25 3.91751 4.16751 0 9 0C13.8325 0 17.75 3.91751 17.75 8.75C17.75 13.5825 13.8325 17.5 9 17.5C4.16751 17.5 0.25 13.5825 0.25 8.75ZM9 7.75C9.55229 7.75 10 8.19771 10 8.75V11.95C10 12.5023 9.55229 12.95 9 12.95C8.44771 12.95 8 12.5023 8 11.95V8.75C8 8.19771 8.44771 7.75 9 7.75ZM9 4.5498C8.44771 4.5498 8 4.99752 8 5.5498C8 6.10209 8.44771 6.5498 9 6.5498H9.008C9.56028 6.5498 10.008 6.10209 10.008 5.5498C10.008 4.99752 9.56028 4.5498 9.008 4.5498H9Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                <div className="product__coupon-info-tooltip transition-3">
                                                                    <p>*This coupon applies to <span>Grocery type products</span> and for purchases over <span>$1000</span>.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product__coupon-date">
                                                            <button onClick={() => handleCopy(product._id, product.deal.couponCode)}>
                                                                <span>{copiedCode[product._id] ? "Copied!" : product.deal.couponCode}</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    );
};
