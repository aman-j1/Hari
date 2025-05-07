import React from 'react';
import { useCart } from '../../Context/cartContent'; // Cart context to access cart and wishlist data
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
  RemoveButton
} from './style/wishlist';

import EmptyCart from '../../Image/empty-cart.webp';

export default function WishlistPage() {
  const { wishlist, dispatch } = useCart(); // Access both cart and wishlist from context

  // Handle adding item from wishlist to cart
  const handleAddToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  // Handle removing item from wishlist
  const handleRemoveFromWishlist = (id) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: { _id: id } });
  };


  return (
    <>
      <BreadCrumbArea>
        <Containers>
          <Row>
            <BreadcrumCol>
              <BreadcrumbTitle>My Wishlist</BreadcrumbTitle>
              <div className=''>
                <BreadItem>
                  <Link to="/">Home</Link>
                </BreadItem>
                &nbsp; &gt; &nbsp;
                <BreadItem>Wishlist</BreadItem>
              </div>
            </BreadcrumCol>
          </Row>
        </Containers>
      </BreadCrumbArea>

      <CartContainer>
        {wishlist.length === 0 ? (
          <>
            <img src={EmptyCart} alt="Empty Wishlist" />
            <p>Your wishlist is empty.<br /> <Link to="/shop">Go shop</Link></p>
          </>
        ) : (
          <>
            {wishlist.map((item) => (
              <CartItem key={item._id}>
                <ItemImage src={`http://localhost:3002${item.image}`} alt={item.name} />
                <ItemInfo>
                  <ItemTitle>{item.name}</ItemTitle>
                  <Price>${item.price}</Price>
                  <QuantityControls>
                    <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                    <RemoveButton onClick={() => handleRemoveFromWishlist(item._id)}>
                      Remove
                    </RemoveButton>
                  </QuantityControls>
                </ItemInfo>
              </CartItem>
            ))}
          </>
        )}
      </CartContainer>
    </>
  );
}
