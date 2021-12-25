import React from "react";

import "./Product.css";

const addToCart = (product) => {
  const products = JSON.parse(localStorage.getItem("products"));
  const newProducts = products ? [...products, product] : [product];
  console.log(newProducts);
  localStorage.setItem("products", JSON.stringify(newProducts));
};

function Product({ product }) {
  return (
    <div className="Product">
      <img src={product.img} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.desc}</p>
      <span>{product.price}</span>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}

export default Product;
