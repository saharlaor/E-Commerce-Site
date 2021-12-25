import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img
          src="https://f-droid.org/repo/icons-640/com.aurora.store.38.png"
          alt="Store Logo"
        />
      </Link>
      <div>
        <Link to="/">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default Header;
