import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UltilizeCart() {
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart,"cádasdasdasdasd");
  var total = 0;
  cart.forEach((e) => {
    total += e.quantity * e.prices;
  });
  return (
    <div
      id="ltn__utilize-cart-menu"
      className="ltn__utilize ltn__utilize-cart-menu"
    >
      <div className="ltn__utilize-menu-inner ltn__scrollbar">
        <div className="ltn__utilize-menu-head">
          <span className="ltn__utilize-menu-title">Cart</span>
          <button className="ltn__utilize-close">×</button>
        </div>
        {cart.map((item, index) => {
          return (
            <div key={index} className="mini-cart-product-area ltn__scrollbar">
              <div className="mini-cart-item clearfix">
                <div className="mini-cart-img">
                  <a href="#">
                    <img src={item.imgUrl[0]} alt="Image" />
                  </a>
                  <span className="mini-cart-item-delete">
                    <i className="icon-cancel" />
                  </span>
                </div>
                <div className="mini-cart-info">
                  <h6>
                    <a href="#" className="customize-a">
                      {item.nameProduct}
                    </a>
                  </h6>
                  <span className="mini-cart-quantity">
                    {item.quantity} x ${item.prices}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        <div className="mini-cart-footer">
          <div className="mini-cart-sub-total">
            <h5>
              Subtotal: <span>${total}</span>
            </h5>
          </div>
          <div className="btn-wrapper">
            <Link to="/home/checkout" className="theme-btn-1 btn btn-effect-1">
              View Cart
            </Link>
            <Link to="/home/checkout" className="theme-btn-2 btn btn-effect-2">
              Checkout
            </Link>
          </div>
          <p>Free Shipping on All Orders Over $100!</p>
        </div>
      </div>
    </div>
  );
}

export default UltilizeCart;
