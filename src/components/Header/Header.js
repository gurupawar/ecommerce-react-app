import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { ShoppingCart, UserCircle } from "phosphor-react";
function Header() {
  return (
    <>
      <div className="header__container">
        <Link to="/" className="logo">
          e-Shop
        </Link>
        <div className="nav__right">
          <div className="my__accout">
            {/* <img
              className="user"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt=""
            /> */}
            <UserCircle size={25} />
            <span>My Account</span>
          </div>
          <Link to="/cart">
            {/* <img
              className="cartIcon"
              src="https://img-premium.flaticon.com/png/512/3002/premium/3002254.png?token=exp=1627108020~hmac=5ce7d08f331be620720030a5ea2f4be3"
              alt=""
            /> */}
            <ShoppingCart size={25} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
