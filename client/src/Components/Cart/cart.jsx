import React, {useState} from 'react';
import { useCart } from '../../Context/cartContent';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
  BreadCrumbArea,
  Containers,
  Row,
  BreadcrumCol,
  BreadcrumbTitle,
  BreadItem,
  CartContainer,
  CartItem,
  ItemImage,
  ItemInfo,
  ItemTitle,
  Price,
  QuantityControls,
  QuantityButton,
  RemoveButton,
  TotalSection,
  CartEmptyTitle,
  CartEmptyButton,
  SideInfo,
  CartTotalInner,
  CardPriceBreak,
  CardPriceInner,
  CartTotalTitle,
  CheckoutBtn
} from './style/cart'

import EmptyCart from '../../Image/empty-cart.webp';

export default function CartPage() {
  const { cart, dispatch } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [validCoupon, setValidCoupon] = useState(null);

  const handleIncrease = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { _id: id } });
  };

  const handleDecrease = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: { _id: id } });
  };

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { _id: id } });
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (total * discountPercent) / 100;
  const gst = (total - discountAmount) * 0.18;
  const deliveryFee = total <= 1000 ? 0 : 15;
  const grandTotal = total - discountAmount + gst + deliveryFee;

  const handleApplyCoupon = async () => {
    try {
      const res = await axios.get('https://hari-1-cbck.onrender.com/api/getAllDeals');
      const { deals } = res.data;

      const matchedDeal = deals.find(
        d =>
          d.deal.couponCode.toLowerCase() === couponCode.trim().toLowerCase() &&
          d.deal.isActive
      );

      if (matchedDeal) {
        setDiscountPercent(matchedDeal.deal.discountPercent);
        setValidCoupon(matchedDeal.deal);
        setCouponError('');
      } else {
        setDiscountPercent(0);
        setValidCoupon(null);
        setCouponError('Invalid or inactive coupon code.');
      }
    } catch (error) {
      console.error(error);
      setCouponError('Error validating coupon.');
    }
  };

  return (
    <>
      <BreadCrumbArea>
        <Containers>
          <Row>
            <BreadcrumCol>
              <BreadcrumbTitle>My Cart</BreadcrumbTitle>
              <div>
                <BreadItem>
                  <Link to="/">Home</Link>
                </BreadItem>
                &nbsp; &gt; &nbsp;
                <BreadItem>Cart</BreadItem>
              </div>
            </BreadcrumCol>
          </Row>
        </Containers>
      </BreadCrumbArea>

      <CartContainer>
        {cart.length === 0 ? (
          <>
            <img src={EmptyCart} alt="Empty" />
            <CartEmptyTitle>Your cart is empty.</CartEmptyTitle>
            <CartEmptyButton to="/shop">Go shop</CartEmptyButton>
          </>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem key={item._id}>
                <ItemImage src={item.image} alt={item.name} />
                <ItemInfo>
                  <ItemTitle>{item.name}</ItemTitle>
                  <SideInfo>
                    <QuantityControls>
                      <QuantityButton onClick={() => handleDecrease(item._id)}>-</QuantityButton>
                      <span>{item.quantity}</span>
                      <QuantityButton onClick={() => handleIncrease(item._id)}>+</QuantityButton>
                    </QuantityControls>
                    <Price><strong>$</strong>{item.price}</Price>
                    <RemoveButton onClick={() => handleRemove(item._id)}>×</RemoveButton>
                  </SideInfo>
                </ItemInfo>
              </CartItem>
            ))}

            <TotalSection>
              <CartTotalInner>
                <CartTotalTitle>Cart Total</CartTotalTitle>

                {/* Coupon Input */}
                <div style={{ marginBottom: '1rem' }}>
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    style={{
                      padding: '8px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      marginRight: '8px',
                      width: '60%'
                    }}
                  />
                  <button
                    onClick={handleApplyCoupon}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: '#007BFF',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Apply
                  </button>
                  {couponError && <p style={{ color: 'red', marginTop: '5px' }}>{couponError}</p>}
                  {validCoupon && (
                    <p style={{ color: 'green', marginTop: '5px' }}>
                      Coupon "{validCoupon.couponCode}" applied — {validCoupon.discountPercent}% off!
                    </p>
                  )}
                </div>

                {/* Price Breakdown */}
                <CardPriceBreak>
                  <CardPriceInner>
                    <strong>Item Total: </strong> <span>${total.toFixed(2)}</span>
                  </CardPriceInner>
                  {discountPercent > 0 && (
                    <CardPriceInner>
                      <strong>Discount ({discountPercent}%): </strong>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </CardPriceInner>
                  )}
                  <CardPriceInner>
                    <strong>GST & Tax (18%): </strong> <span>${gst.toFixed(2)}</span>
                  </CardPriceInner>
                  <CardPriceInner>
                    <strong>Delivery Fees: </strong> <span>${deliveryFee.toFixed(2)}</span>
                  </CardPriceInner>
                  <CardPriceInner>
                    <strong>Total:</strong> <span>${grandTotal.toFixed(2)}</span>
                  </CardPriceInner>
                </CardPriceBreak>

                <CheckoutBtn to="/checkout">Check Out</CheckoutBtn>
              </CartTotalInner>
            </TotalSection>
          </>
        )}
      </CartContainer>
    </>
  );
}
