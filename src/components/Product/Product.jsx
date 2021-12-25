import React from "react";

import "./Product.css";

function Product({ product }) {
  return (
    <div className="Product">
      <img src={product.img} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.desc}</p>
      <span>{product.price}</span>
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
