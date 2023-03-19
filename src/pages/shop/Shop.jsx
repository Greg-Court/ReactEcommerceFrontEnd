import React, { useState } from "react";
import { Product } from "./Product";
import { PRODUCTS } from "./products";
import "./Shop.css";

export const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");

  let productsToDisplay = PRODUCTS.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  ).map((product) => <Product data={product} />);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>GCommerce</h1>
      </div>
      <form className="search">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>
      <div className="delimiterWrapper">
        <div className="delimiter"></div>
      </div>
      <div className="products">{productsToDisplay}</div>
    </div>
  );
};
