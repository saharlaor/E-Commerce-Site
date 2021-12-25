import React from "react";
import "./ProductList.css";

import data from "../../data";
import Product from "../Product/Product";

const getProducts = (type) => {
  const products = data[type];
  console.log(products);
  return products.map((product, i) => <Product key={i} product={product} />);
};

function ProductList(props) {
  return <div className="ProductList">{getProducts(props.type)}</div>;
}

export default ProductList;
