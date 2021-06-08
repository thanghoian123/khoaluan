import React from "react";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <div>
      {/* Utilize Cart Menu Start
      <div
        id="ltn__utilize-cart-menu"
        className="ltn__utilize ltn__utilize-cart-menu"
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <span className="ltn__utilize-menu-title">Cart</span>
            <button className="ltn__utilize-close">×</button>
          </div>
          <div className="mini-cart-product-area ltn__scrollbar">
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#" className="customize-a">
                  <img
                    src={process.env.PUBLIC_URL + `img/product/1.png`}
                    alt="Image"
                  />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel" />
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#" className="customize-a">Red Hot Tomato</a>
                </h6>
                <span className="mini-cart-quantity">1 x $65.00</span>
              </div>
            </div>
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#" className="customize-a">
                  <img
                    src={process.env.PUBLIC_URL + `img/product/2.png`}
                    alt="Image"
                  />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel" />
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#" className="customize-a">Vegetables Juices</a>
                </h6>
                <span className="mini-cart-quantity">1 x $85.00</span>
              </div>
            </div>
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#" className="customize-a">
                  <img
                    src={process.env.PUBLIC_URL + `img/product/3.png`}
                    alt="Image"
                  />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel" />
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#" className="customize-a">Orange Sliced Mix</a>
                </h6>
                <span className="mini-cart-quantity">1 x $92.00</span>
              </div>
            </div>
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#" className="customize-a">
                  <img
                    src={process.env.PUBLIC_URL + `img/product/4.png`}
                    alt="Image"
                  />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel" />
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#" className="customize-a">Orange Fresh Juice</a>
                </h6>
                <span className="mini-cart-quantity">1 x $68.00</span>
              </div>
            </div>
          </div>
          <div className="mini-cart-footer">
            <div className="mini-cart-sub-total">
              <h5>
                Subtotal: <span>$310.00</span>
              </h5>
            </div>
            <div className="btn-wrapper">
              <a href="cart.html" className="theme-btn-1 btn btn-effect-1">
                View Cart
              </a>
              <a href="cart.html" className="theme-btn-2 btn btn-effect-2">
                Checkout
              </a>
            </div>
            <p>Free Shipping on All Orders Over $100!</p>
          </div>
        </div>
      </div> */}

      {/* BANNER AREA START */}
      <div className="ltn__banner-area mt-120 mt--90 d-none">
        <div className="container">
          <div className="row ltn__custom-gutter--- justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="ltn__banner-item">
                <div className="ltn__banner-img">
                  <Link to="/home/shop">
                    <img
                      src={process.env.PUBLIC_URL + `/img/banner/1.jpg`}
                      alt="Banner Image"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="ltn__banner-item">
                <div className="ltn__banner-img">
                  <Link to="/home/shop">
                    <img
                      src={process.env.PUBLIC_URL + `/img/banner/2.jpg`}
                      alt="Banner Image"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="ltn__banner-item">
                <div className="ltn__banner-img">
                  <Link to="/home/shop">
                    <img
                      src={process.env.PUBLIC_URL + `/img/banner/1.jpg`}
                      alt="Banner Image"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BANNER AREA END */}
      {/* BANNER AREA START */}
      <div className="ltn__banner-area mt-120">
        <div className="container">
          <div className="row ltn__custom-gutter--- justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="ltn__banner-item">
                <div className="ltn__banner-img">
                  <Link to="/home/shop">
                    <img
                      src={process.env.PUBLIC_URL + `/img/banner/13.png`}
                      alt="Banner Image"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="ltn__banner-item">
                    <div className="ltn__banner-img">
                      <a href="shop.html">
                        <img
                          src={process.env.PUBLIC_URL + `/img/banner/14.png`}
                          alt="Banner Image"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="ltn__banner-item">
                    <div className="ltn__banner-img">
                      <a href="shop.html">
                        <img
                          src={process.env.PUBLIC_URL + `/img/banner/15.png`}
                          alt="Banner Image"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BANNER AREA END */}
      {/* BLOG AREA START (blog-3) */}
      <div className="ltn__blog-area pt-115 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title white-color---">Leatest Blog</h1>
              </div>
            </div>
          </div>
          <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
            {/* Blog Item */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html" className="customize-a">
                    <img
                      src={process.env.PUBLIC_URL + `/img/blog/1.jpg`}
                      alt="#"
                    />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#" className="customize-a">
                          <i className="far fa-user" />
                          by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#" className="customize-a">
                          <i className="fas fa-tags" />
                          Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html" className="customize-a">
                      Common Engine Oil Problems and Solutions
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt" />
                          June 24, 2020
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html" className="customize-a">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html" className="customize-a">
                    <img
                      src={process.env.PUBLIC_URL + `/img/blog/2.jpg`}
                      alt="#"
                    />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#" className="customize-a">
                          <i className="far fa-user" />
                          by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#" className="customize-a">
                          <i className="fas fa-tags" />
                          Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html" className="customize-a">
                      How and when to replace brake rotors
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt" />
                          July 23, 2020
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html" className="customize-a">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html" className="customize-a">
                    <img
                      src={process.env.PUBLIC_URL + `/img/blog/3.jpg`}
                      alt="#"
                    />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#" className="customize-a">
                          <i className="far fa-user" />
                          by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#" className="customize-a">
                          <i className="fas fa-tags" />
                          Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html" className="customize-a">
                      Elenance, Servicing &amp; Repairs
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt" />
                          August 22, 2020
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html" className="customize-a">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html" className="customize-a">
                    <img
                      src={process.env.PUBLIC_URL + `/img/blog/4.jpg`}
                      alt="#"
                    />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#" className="customize-a">
                          <i className="far fa-user" />
                          by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#" className="customize-a">
                          <i className="fas fa-tags" />
                          Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html" className="customize-a">
                      Healthiest Vegetables on Earth
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt" />
                          June 24, 2020
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html" className="customize-a">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html" className="customize-a">
                    <img
                      src={process.env.PUBLIC_URL + `/img/blog/5.jpg`}
                      alt="#"
                    />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#" className="customize-a">
                          <i className="far fa-user" />
                          by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#" className="customize-a">
                          <i className="fas fa-tags" />
                          Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html" className="customize-a">
                      How te Your Tires Last Longer
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt" />
                          June 24, 2020
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html" className="customize-a">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* BLOG AREA END */}
    </div>
  );
}

export default Slider;
