import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../../redux/actions/actions";

function Modal({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const onAddToCart = () => {
    if (product.quantity >= quantity) {
      let tempProduct = Object.assign({}, product);
      tempProduct.quantity = quantity;
      dispatch(actions.addCart(tempProduct));
    }
  };
  
  return (
    <div className="ltn__modal-area ltn__quick-view-modal-area">
      <div className="modal fade" id="quick_view_modal" tabIndex={-1}>
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
                {/* <i class="fas fa-times"></i> */}
              </button>
            </div>
            <div className="modal-body">
              <div className="ltn__quick-view-modal-inner">
                <div className="modal-product-item">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="modal-product-img">
                        <img
                          src={product.imgUrl ? product.imgUrl[0] : ""}
                          alt="#"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="modal-product-info">
                        <div className="product-ratting">
                          <ul>
                            <li>
                              <a href="#" className="customize-a">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="customize-a">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="customize-a">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="customize-a">
                                <i className="fas fa-star-half-alt" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="customize-a">
                                <i className="far fa-star" />
                              </a>
                            </li>
                            <li className="review-total">
                              {" "}
                              <a href="#" className="customize-a">
                                {" "}
                                ( 95 Reviews )
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h3>{product ? product.nameProduct : ""}</h3>
                        <div className="product-price">
                          <span>${product ? product.prices : ""}</span>
                          <del>${product ? product.prices : ""}</del>
                        </div>
                        <div className="modal-product-meta ltn__product-details-menu-1">
                          <ul>
                            <li>
                              <strong>Categories:</strong>
                              <span>
                                <a href="#" className="customize-a">
                                  Parts
                                </a>
                                <a href="#" className="customize-a">
                                  Car
                                </a>
                                <a href="#" className="customize-a">
                                  Seat
                                </a>
                                <a href="#" className="customize-a">
                                  Cover
                                </a>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="ltn__product-details-menu-2">
                          <ul>
                            <li>
                              <div>
                                <button
                                  onClick={() => {
                                    setQuantity(quantity - 1);
                                  }}
                                >
                                  -
                                </button>
                                <input
                                  type="text"
                                  value={quantity}
                                  name="qtybutton"
                                  className="cart-plus-minus-box"
                                  onChange={(e) => {
                                    setQuantity(e.target.value);
                                  }}
                                />
                                <button
                                  onClick={() => {
                                    setQuantity(quantity + 1);
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="theme-btn-1 btn btn-effect-1"
                                title="Add to Cart"
                                data-toggle="modal"
                                data-target="#add_to_cart_modal"
                              >
                                <i className="fas fa-shopping-cart" />
                                <span onClick={onAddToCart}>ADD TO CART</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ltn__product-details-menu-3">
                          <ul>
                            <li>
                              <a
                                href="#"
                                className
                                title="Wishlist"
                                data-toggle="modal"
                                data-target="#liton_wishlist_modal"
                              >
                                <i className="far fa-heart" />
                                <span>Add to Wishlist</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className
                                title="Compare"
                                data-toggle="modal"
                                data-target="#quick_view_modal"
                              >
                                <i className="fas fa-exchange-alt" />
                                <span>Compare</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <hr />
                        <div className="ltn__social-media">
                          <ul>
                            <li>Share:</li>
                            <li>
                              <a
                                href="#"
                                className="customize-a"
                                title="Facebook"
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="customize-a"
                                title="Twitter"
                              >
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="customize-a"
                                title="Linkedin"
                              >
                                <i className="fab fa-linkedin" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="customize-a"
                                title="Instagram"
                              >
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
