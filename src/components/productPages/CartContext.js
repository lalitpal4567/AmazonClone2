import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const[totalProduct, setTotalProduct] = useState(0);
  const[totalAmount, setTotalAmount] = useState(0);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
    setTotalProduct(cartItems.length + 1);
    const amount = cartItems.reduce((total, item) => total + item.price, 0);
    setTotalAmount(amount);
  };


  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
    setTotalProduct(cartItems.length - 1);
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalProduct , totalAmount}}>
      {children}
    </CartContext.Provider>
  );
};
