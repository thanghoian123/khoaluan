import React from "react";

function AddToCartModal({ product }) {
  return (
    <div className="ltn__modal-area ltn__add-to-cart-modal-area">
      <div className="modal fade" id="add_to_cart_modal" tabIndex={-1}>
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="ltn__quick-view-modal-inner">
                <div className="modal-product-item">
                  <div className="row">
                    <div className="col-12">
                      <div className="modal-product-img">
                        <img
                          src={product.imgUrl ? product.imgUrl[0] : ""}
                          alt="#"
                        />
                      </div>
                      <div className="modal-product-info">
                        <h5>
                          <a className="customize-a">
                            {product ? product.nameProduct : ""}
                          </a>
                        </h5>
                        <p className="added-cart">
                          <i className="fa fa-check-circle" /> Successfully
                          added to your Cart
                        </p>
                        <div className="btn-wrapper">
                          <a
                            href="cart.html"
                            className="theme-btn-1 btn btn-effect-1"
                          >
                            View Cart
                          </a>
                          <a
                            href="checkout.html"
                            className="theme-btn-2 btn btn-effect-2"
                          >
                            Checkout
                          </a>
                        </div>
                      </div>
                      {/* additional-info */}
                      <div className="additional-info d-none">
                        <p>
                          We want to give you <b>10% discount</b> for your first
                          order, <br /> Use discount code at checkout
                        </p>
                        <div className="payment-method">
                          <img src="img/icons/payment.png" alt="#" />
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

export default AddToCartModal;
