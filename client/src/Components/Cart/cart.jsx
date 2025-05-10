import React from 'react';
import { useCart } from '../../Context/cartContent';
import { Link } from 'react-router-dom';

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

  const handleIncrease = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { _id: id } });
  };

  const handleDecrease = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: { _id: id } });
  };

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { _id: id } });
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const gst = total * 0.18;
  const deliveryFee = total <= 1000 ? 0 : 15;
  const grandTotal = total + gst + deliveryFee;

  return (
    <>
      <BreadCrumbArea>
        <Containers>
          <Row>
            <BreadcrumCol>
              <BreadcrumbTitle>
                My Cart
              </BreadcrumbTitle>
              <div className=''>
                <BreadItem>
                  <Link to="/">Home</Link>
                </BreadItem>
                &nbsp; &gt; &nbsp;
                <BreadItem>
                  Cart
                </BreadItem>
              </div>
            </BreadcrumCol>
          </Row>

        </Containers>
      </BreadCrumbArea>

      <CartContainer>
        {cart.length === 0 ? (
          <>
            <img src={EmptyCart} alt="Empty" />
            <CartEmptyTitle>Your cart is empty. </CartEmptyTitle>
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
                <CartTotalTitle>
                  Cart Total
                </CartTotalTitle>

                <CardPriceBreak>
                  <CardPriceInner><strong>Item Total: </strong> <span>${total.toFixed(2)}</span></CardPriceInner>
                  <CardPriceInner><strong>Gst & Tax (18%): </strong> <span>${gst.toFixed(2)}</span></CardPriceInner>
                  <CardPriceInner><strong>Delivery Fees: </strong> <span>${deliveryFee.toFixed(2)}</span></CardPriceInner>
                  <CardPriceInner><strong>Total:</strong> <span>${grandTotal.toFixed(2)}</span></CardPriceInner>
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
