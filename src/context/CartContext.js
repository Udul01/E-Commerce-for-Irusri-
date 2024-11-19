// src/context/CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // const addToCart = (product) => {
  //   const existingProduct = cartItems.find(item => item.id === product.id);
  //   if (existingProduct) {
  //     // Update quantity if item already exists
  //     setCartItems(cartItems.map(item => 
  //       item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  //     ));
  //   } else {
  //     // Add new item to the cart
  //     setCartItems([...cartItems, { ...product, quantity: 1 }]);
  //   }
  // };

  const addToCart = (product) => {
    console.log("Adding product to cart:", product);  // Add this log
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(cartItems.map(item => 
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};
