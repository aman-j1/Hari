import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Create the Cart and Wishlist Context
const CartContext = createContext();

// Custom hook to use the Cart Context
export const useCart = () => {
  return useContext(CartContext);
};

// Initial state of the cart and wishlist
const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cart')) || [],
  wishlistItems: JSON.parse(localStorage.getItem('wishlist')) || [],
};

// Define the cart and wishlist reducer
const cartReducer = (state, action) => {
  console.log('Action received:', action);
  switch (action.type) {
    // Cart actions
    case 'ADD_TO_CART': {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id &&
              item.size === action.payload.size &&
              item.color === action.payload.color
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload._id ||
            item.size !== action.payload.imageUrl ||
            item.color !== action.payload.price
        ),
      };
    }

    case 'DECREASE_QUANTITY': {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === action.payload._id &&
            item.size === action.payload.imageUrl &&
            item.color === action.payload.price
            ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
            : item
        ),
      };
    }

    case 'INCREASE_QUANTITY': {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === action.payload._id &&
            item.size === action.payload.imageUrl &&
            item.color === action.payload.price
            ? {
              ...item,
              quantity: item.quantity + 1,
            }
            : item
        ),
      };
    }

    case 'CLEAR_CART': {
      return {
        ...state,
        cartItems: [],
      };
    }

    // Wishlist actions
    case 'ADD_TO_WISHLIST': {
      const existingItem = state.wishlistItems.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        return state; // Don't add the same item twice to the wishlist
      }
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };
    }

    case 'REMOVE_FROM_WISHLIST': {
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (item) => item._id !== action.payload._id 
        ),
      };
    }

    case 'CLEAR_WISHLIST': {
      return {
        ...state,
        wishlistItems: [],
      };
    }

    default:
      return state;
  }
};

// CartProvider component to wrap the app
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Save cart and wishlist to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(state.wishlistItems));
  }, [state.wishlistItems]);

  // Calculate total items in cart and wishlist
  const cartQuantity = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  
  const wishlistQuantity = state.wishlistItems.length;

  return (
    <CartContext.Provider value={{ 
      cart: state.cartItems, 
      wishlist: state.wishlistItems,
      dispatch, 
      cartQuantity, 
      wishlistQuantity 
    }}>
      {children}
    </CartContext.Provider>
  );
};
