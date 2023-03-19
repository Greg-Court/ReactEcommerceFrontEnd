import React, { createContext, useState } from "react";
import { PRODUCTS } from "../pages/shop/products";

// context OBJECT is created using the createContext method
// used to store the shopping cart and related functionality
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

// In order for components to access the context object, a "provider" COMPONENT
// must be created that wraps the components that need access to the context.
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    // The function passed to setCartItems takes a single argument
    // which is the previous value of the cartItems state variable.
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  const contextValue = {cartItems, addToCart, removeFromCart}

  return <ShopContext.Provider value = {contextValue}>{props.children}</ShopContext.Provider>;
};
// shopContextProvider component acts as a bridge between the shopContext
// context object and the components that need access to the shopping cart data.

// shopContext is just a context object that holds the shopping cart data,
// while shopContextProvider is a provider component that provides
// the shopping cart data to other components using the context API.
