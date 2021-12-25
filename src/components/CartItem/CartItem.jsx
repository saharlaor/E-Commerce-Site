import React, { Component } from "react";

import "./CartItem.css";

export class CartItem extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = { amount: this.props.product.amount };
  }

  render() {
    return (
      <div className="CartItem">
        <img src={this.props.product.img} alt={this.props.product.name} />
        <h6>{this.props.product.name}</h6>
        <span>Total Price: {this.props.product.price}$</span>
        <input
          type="number"
          name="item-amount"
          id="item-amount"
          value={this.state.amount}
          onChange={(e) =>
            this.state.amount > 0 && this.setState({ amount: e.target.value })
          }
        />
        <button onClick={() => this.props.removeHandler(this.props.product.id)}>
          Remove
        </button>
      </div>
    );
  }
}

export default CartItem;
