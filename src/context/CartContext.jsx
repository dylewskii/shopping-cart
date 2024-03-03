import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext("");

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = (productObject) => {
    const newItem = { ...productObject, size: selectedSize };
    setCartItems([...cartItems, newItem]);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleAddToCart,
        handleRemoveFromCart,
        handleSizeSelection,
        selectedSize,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Prop Types
CartProvider.propTypes = { children: PropTypes.node };

export default CartContext;
