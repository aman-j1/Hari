import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Deals = () => {
    const [products, setProducts] = useState([]); // Renamed to products for better clarity
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('https://hari-1-cbck.onrender.com/api/getAllDeals');
                setProducts(res.data.deals); // Corrected to use "deals" from the API response
            } catch (error) {
                console.error(error);
                setError("Failed to fetch products"); // Updated the error message
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <div className="dealinfo">
                {error && <p className="error">{error}</p>} {/* Display error message if exists */}

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
                                <p>{product.deal.expiry}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No active deals available</p> // Show this message if there are no products in the array
                )}
            </div>
        </>
    );
};
