import React, { Component } from "react";

import CartItem from "../CartItem/CartItem";

import "./Cart.css";

export class Cart extends Component {
  state = { items: JSON.parse(localStorage.getItem("products")) };

  removeItem = (id) => {
    const newProducts = this.state.items.filter((item) => item.id !== id);
    localStorage.setItem("products", JSON.stringify(newProducts));
    this.setState({ items: newProducts });
  };

  generateCartItems = () => {
    if (!this.state.items) return;
    return this.state.items.map((item) => (
      <CartItem product={item} removeHandler={this.removeItem} key={item.id} />
    ));
  };

  render() {
    const items = this.generateCartItems();
    return <div className="Cart">{items}</div>;
  }
}

export default Cart;
