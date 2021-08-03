import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useCart } from "react-use-cart";
import { ShoppingCart, UserCircle } from "phosphor-react";
function Header() {
  const { totalUniqueItems } = useCart();
  return (
    <>
      <div className="header__container">
        <Link to="/" className="logo">
          e-Shop
        </Link>
        <div className="nav__right">
          <div className="my__accout">
            <UserCircle size={25} />
            <span>My Account</span>
          </div>
          <Link to="/cart">
            <div className="group">
              <ShoppingCart className="shoingCart" size={25} />
              {totalUniqueItems ? (
                <div className="itemCound">{totalUniqueItems}</div>
              ) : (
                <div></div>
              )}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
