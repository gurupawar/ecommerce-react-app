import React from "react";
import "./Cart.css";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

function Cart() {
  const {
    isEmpty,
    // totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty)
    return (
      <div className="emptyCart_alert">
        {" "}
        <h2>Your cart is empty</h2>
        <Link to="/">
          <span>
            <img
              className="backIcon"
              src="https://image.flaticon.com/icons/png/512/507/507257.png"
              alt=""
            />
            GO BACK
          </span>
        </Link>
      </div>
    );
  return (
    <>
      <div className="container">
        <span className="breadcrumb">
          <Link to="/" className="active">
            Home
          </Link>{" "}
          / <Link to="/cart">Cart</Link>
        </span>
        <div className="cart__container">
          {items.map((item, index) => (
            <div className="cart__row" key={index}>
              <img className="cart__itemImage" src={item.image} alt="" />
              <p>{item.title}</p>
              <div className="totalItems">
                <img
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  src="https://image.flaticon.com/icons/png/512/1828/1828906.png"
                  alt=""
                />
                <span>{item.quantity}</span>

                <img
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  src="https://image.flaticon.com/icons/png/512/1828/1828926.png"
                  alt=""
                />
              </div>
              <span className="item__price">{item.price}</span>
              <img
                onClick={() => removeItem(item.id)}
                src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
                alt=""
                className="removeItemIcon"
              />
            </div>
          ))}
        </div>
        <div className="subTotal">
          <p className="caption">Total items in cart : {totalItems}</p>
          <p className="caption">Total price : ${cartTotal.toFixed(2)}</p>
          <button
            className="checkOut"
            onClick={() => alert("Your order has been placed!")}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
