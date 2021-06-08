import {
  Backdrop,
  CircularProgress,
  makeStyles,
  Snackbar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as APIs from "../../../asset/APIs";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function Checkout() {
  const classes = useStyles();
  const cart = useSelector((state) => state.cartReducer);
  const [message, setMessage] = useState({
    stt: false,
    message: "",
    err: null,
  });
  const [open, setOpen] = useState(false);
  const [bill, setBill] = useState({
    username: "",
    address: "",
    city: "",
    phoneNumber: "",
    totalBill: 0,
    details: [
      {
        productID: "",
        prices: 0,
        quantity: 0,
        totalProduct: 0,
      },
    ],
  });

  const details = cart.map((item) => ({
    productID: item.id,
    prices: item.prices,
    quantity: item.quantity,
    // totalProduct: 0,
  }));

  const username = localStorage.getItem("username") || "";
  const accessToken = localStorage.getItem("accessToken") || "";

  var total = 0;
  cart.forEach((e) => {
    total += e.quantity * e.prices;
  });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    APIs.onCreateBill(bill, username, accessToken).then((resp) => {
      console.log(resp.data,"heheheheh");
      setMessage({
        err: resp.data.error,
        stt: true,
        message: resp.data.message,
      });
      setOpen(false);
    });
  };

  const onHandleChange = (e) => {
    setBill({ ...bill, details: details, [e.target.name]: e.target.value });
  };
  console.log(bill);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setMessage({ ...message, stt: false });
  };

  return (
    <div style={{ backgroundColor: "#fff", color: "#000", paddingTop: "20px" }}>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        open={message.stt}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={message.err == null ? "success" : "warning"}
        >
          {message.message}
        </Alert>
      </Snackbar>
      <div className="ltn__checkout-area mb-105">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__checkout-inner">
                <div className="ltn__checkout-single-content ltn__returning-customer-wrap">
                  <h5>
                    Returning customer?{" "}
                    <a
                      className="ltn__secondary-color"
                      href="#ltn__returning-customer-login"
                      data-toggle="collapse"
                    >
                      Click here to login
                    </a>
                  </h5>
                  <div
                    id="ltn__returning-customer-login"
                    className="collapse ltn__checkout-single-content-info"
                  >
                    <div className="ltn_coupon-code-form ltn__form-box">
                      <p>Please login your accont.</p>
                      <form>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                              <input
                                type="text"
                                className="input-text"
                                name="ltn__name"
                                placeholder="Enter your name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item input-item-email ltn__custom-icon">
                              <input
                                type="text"
                                name="username"
                                className="input-text"
                                placeholder="Enter email address"
                              />
                            </div>
                          </div>
                        </div>
                        <button className="btn theme-btn-1 btn-effect-1 text-uppercase">
                          Login
                        </button>
                        <label className="input-info-save mb-0">
                          <input type="checkbox" name="agree" /> Remember me
                        </label>
                        <p className="mt-30">
                          <a href="register.html">Lost your password?</a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="ltn__checkout-single-content ltn__coupon-code-wrap">
                  <h5>
                    Have a coupon?{" "}
                    <a
                      className="ltn__secondary-color"
                      href="#ltn__coupon-code"
                      data-toggle="collapse"
                    >
                      Click here to enter your code
                    </a>
                  </h5>
                  <div
                    id="ltn__coupon-code"
                    className="collapse ltn__checkout-single-content-info"
                  >
                    <div className="ltn__coupon-code-form">
                      <p>If you have a coupon code, please apply it below.</p>
                      <form action="#">
                        <input
                          type="text"
                          className="input-text"
                          name="coupon-code"
                          placeholder="Coupon code"
                        />
                        <button className="btn theme-btn-2 btn-effect-2 text-uppercase">
                          Apply Coupon
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="ltn__checkout-single-content mt-50">
                  <h4 className="title-2">Billing Details</h4>
                  <div className="ltn__checkout-single-content-info">
                    <form onSubmit={onHandleSubmit}>
                      <h6>Personal Information</h6>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-item input-item-name ltn__custom-icon">
                            <input
                              type="text"
                              className="input-text"
                              name="ltn__name"
                              placeholder="First name"
                              onChange={onHandleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item input-item-name ltn__custom-icon">
                            <input
                              type="text"
                              className="input-text"
                              name="ltn__lastname"
                              placeholder="Last name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item input-item-email ltn__custom-icon">
                            <input
                              type="text"
                              name="username"
                              className="input-text"
                              placeholder="email address"
                              onChange={onHandleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item input-item-phone ltn__custom-icon">
                            <input
                              type="text"
                              className="input-text"
                              name="phoneNumber"
                              placeholder="phone number"
                              onChange={onHandleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item input-item-website ltn__custom-icon">
                            <input
                              type="text"
                              className="input-text"
                              name="ltn__company"
                              placeholder="Company name (optional)"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item input-item-website ltn__custom-icon">
                            <input
                              type="text"
                              className="input-text"
                              placeholder="Company address (optional)"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <h6>Country</h6>
                          <div className="input-item">
                            <select className="nice-select">
                              <option>Select Country</option>
                              <option>Australia</option>
                              <option>Canada</option>
                              <option>China</option>
                              <option>Morocco</option>
                              <option>Saudi Arabia</option>
                              <option>United Kingdom (UK)</option>
                              <option>United States (US)</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <h6>Address</h6>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-item">
                                <input
                                  type="text"
                                  className="input-text"
                                  placeholder="House number and street name"
                                  name="address"
                                  onChange={onHandleChange}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-item">
                                <input
                                  type="text"
                                  className="input-text"
                                  placeholder="Apartment, suite, unit etc. (optional)"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <h6>Town / City</h6>
                          <div className="input-item">
                            <input
                              type="text"
                              className="input-text"
                              placeholder="City"
                              name="city"
                              onChange={onHandleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <h6>State </h6>
                          <div className="input-item">
                            <input
                              type="text"
                              className="input-text"
                              placeholder="State"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <h6>Zip</h6>
                          <div className="input-item">
                            <input
                              type="text"
                              className="input-text"
                              placeholder="Zip"
                            />
                          </div>
                        </div>
                      </div>
                      <p>
                        <label className="input-info-save mb-0">
                          <input type="checkbox" name="agree" /> Create an
                          account?
                        </label>
                      </p>
                      <h6>Order Notes (optional)</h6>
                      <div className="input-item input-item-textarea ltn__custom-icon">
                        <textarea
                          name="ltn__message"
                          placeholder="Notes about your order, e.g. special notes for delivery."
                          defaultValue={""}
                        />
                      </div>
                      <button
                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                        type="submit"
                      >
                        Place order
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ltn__checkout-payment-method mt-50">
                <h4 className="title-2">Payment Method</h4>
                <div id="checkout_accordion_1">
                  {/* card */}
                  <div className="card">
                    <h5
                      className="collapsed ltn__card-title"
                      data-toggle="collapse"
                      data-target="#faq-item-2-1"
                      aria-expanded="false"
                    >
                      Check payments
                    </h5>
                    <div
                      id="faq-item-2-1"
                      className="collapse"
                      data-parent="#checkout_accordion_1"
                    >
                      <div className="card-body">
                        <p>
                          Please send a check to Store Name, Store Street, Store
                          Town, Store State / County, Store Postcode.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h5
                      className="ltn__card-title"
                      data-toggle="collapse"
                      data-target="#faq-item-2-2"
                      aria-expanded="true"
                    >
                      Cash on delivery
                    </h5>
                    <div
                      id="faq-item-2-2"
                      className="collapse show"
                      data-parent="#checkout_accordion_1"
                    >
                      <div className="card-body">
                        <p>Pay with cash upon delivery.</p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h5
                      className="collapsed ltn__card-title"
                      data-toggle="collapse"
                      data-target="#faq-item-2-3"
                      aria-expanded="false"
                    >
                      PayPal <img src="img/icons/payment-3.png" alt="#" />
                    </h5>
                    <div
                      id="faq-item-2-3"
                      className="collapse"
                      data-parent="#checkout_accordion_1"
                    >
                      <div className="card-body">
                        <p>
                          Pay via PayPal; you can pay with your credit card if
                          you don’t have a PayPal account.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ltn__payment-note mt-30 mb-30">
                  <p>
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping-cart-total mt-50">
                <h4 className="title-2">Cart Totals</h4>
                <table className="table">
                  <tbody>
                    {cart.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            {item.nameProduct}{" "}
                            <strong>× {item.quantity}</strong>
                          </td>
                          <td>${item.prices}</td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td>
                        <strong>Order Total</strong>
                      </td>
                      <td>
                        <strong>${total}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
