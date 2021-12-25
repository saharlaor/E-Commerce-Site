import React from "react";
import ProductList from "../ProductList/ProductList";
import "./Shop.css";

function Shop() {
  return (
    <div className="Shop">
      <h2>Mens</h2>
      <ProductList type="men" />
      <h2>Womens</h2>
      <ProductList type="women" />
      <h2>Shoes</h2>
      <ProductList type="shoes" />
    </div>
  );
}

export default Shop;
