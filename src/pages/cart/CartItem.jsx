import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export const CartItem = ({ data }) => {
  const { id, productName, price, productImage } = data;
  // we have grabbed addToCart from shopContext, now we have access to it!
  const { removeFromCart, addToCart, cartItems } = useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="modifyQty">
          <button className="modifyQtyBttn" onClick={() => removeFromCart(id)}>-</button>
          <p>{cartItems[id] > 0 && cartItems[id]}</p>
          <button className="modifyQtyBttn" onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
