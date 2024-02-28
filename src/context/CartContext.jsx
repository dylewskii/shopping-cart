import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext("");

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {};

  const removeFromCart = () => {};

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Prop Types
CartProvider.propTypes = { children: PropTypes.node };

export default CartContext;
