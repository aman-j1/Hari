import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Deals = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    // Function to format expiry date
    const formatExpiryDate = (expiryDate) => {
        const date = new Date(expiryDate);
        return date.toLocaleString(); // This will give the format 'MM/DD/YYYY, HH:mm:ss'
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('https://hari-1-cbck.onrender.com/api/getAllDeals');
                setProducts(res.data.deals); // Assume 'deals' is the array
            } catch (error) {
                console.error(error);
                setError("Failed to fetch products");
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <div className="dealinfo">
                {error && <p className="error">{error}</p>} {/* Show error message if exists */}

                {products.length > 0 ? (
                    <div className="deals-list">
                        {products.map((product) => (
                            <div key={product._id} className="deal-card">
                                <img src={product.imageUrl} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <p>Price: ${product.price}</p>

                                {product.deal && product.deal.discountPercent > 0 && (
                                    <p>Discount: {product.deal.discountPercent}%</p>
                                )}

                                {/* Display Coupon Code if available */}
                                {product.deal && product.deal.couponCode && (
                                    <p>Coupon Code: {product.deal.couponCode}</p>
                                )}

                                {/* Display Expiry Date in formatted form */}
                                {product.deal && product.deal.expiry && (
                                    <p>Expiry: {formatExpiryDate(product.deal.expiry)}</p>
                                )}

                                {/* Display Active/Inactive Status */}
                                {product.deal && (
                                    <p>Status: {product.deal.isActive ? 'Active' : 'Inactive'}</p>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No active deals available</p>
                )}
            </div>
        </>
    );
};
