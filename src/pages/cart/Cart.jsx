import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import { PRODUCTS } from "../shop/products";
import { CartItem } from "./CartItem";
import "./Cart.css";

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  const cartProducts = PRODUCTS.filter((product) => cartItems[product.id] > 0)
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId]
      const product = PRODUCTS.find((product) => product.id === parseInt(itemId));
      price += quantity * product.price;
    }
    setTotalPrice(price);
  }, [cartItems])

  return (
    <div className="cart">
      <div className="cartTitle">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {cartProducts.map((product) => (
          <CartItem data={product} />
        ))}
      </div>
      <div className="total">
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};
