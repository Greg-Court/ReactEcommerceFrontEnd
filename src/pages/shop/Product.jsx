import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;
  // we have grabbed addToCart from shopContext, now we have access to it!
  const { addToCart, cartItems } = useContext(ShopContext);
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart { cartItems[id] > 0 && `(${cartItems[id]})`}
        </button>
      </div>
    </div>
  );
};
