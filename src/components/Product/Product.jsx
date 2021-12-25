import React from "react";

import "./Product.css";

const addToCart = (product) => {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const tempItem = products.find((item) => item.id === product.id);
  tempItem ? tempItem.amount++ : products.push({ ...product, amount: 1 });
  const newProducts = products ? products : [product];
  localStorage.setItem("products", JSON.stringify(newProducts));
};

function Product({ product }) {
  return (
    <div className="Product">
      <img src={product.img} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.desc}</p>
      <div>{product.price}$</div>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}

export default Product;
