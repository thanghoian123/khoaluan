import React from "react";

function ProductFind({ ProductFind }) {
  return (
    <div>
      <div className="col-md-12">
        <div className="ltn__shop-details-img-gallery">
          <div className="ltn__shop-details-large-img">
            <div className="single-large-img">
              <a href="img/product/1.png" data-rel="lightcase:myCollection">
                <img
                  src={ProductFind.imgUrl ? ProductFind.imgUrl[0] : ""}
                  alt="Image"
                />
              </a>
            </div>
            {/* <div className="single-large-img">
              <a href="img/product/2.png" data-rel="lightcase:myCollection">
                <img src="img/product/2.png" alt="Image" />
              </a>
            </div>
            <div className="single-large-img">
              <a href="img/product/3.png" data-rel="lightcase:myCollection">
                <img src="img/product/3.png" alt="Image" />
              </a>
            </div>
            <div className="single-large-img">
              <a href="img/product/4.png" data-rel="lightcase:myCollection">
                <img src="img/product/4.png" alt="Image" />
              </a>
            </div>
            <div className="single-large-img">
              <a href="img/product/5.png" data-rel="lightcase:myCollection">
                <img src="img/product/5.png" alt="Image" />
              </a>
            </div>
            <div className="single-large-img">
              <a href="img/product/6.png" data-rel="lightcase:myCollection">
                <img src="img/product/6.png" alt="Image" />
              </a>
            </div>
            <div className="single-large-img">
              <a href="img/product/7.png" data-rel="lightcase:myCollection">
                <img src="img/product/7.png" alt="Image" />
              </a>
            </div>
          </div>
          <div className="ltn__shop-details-small-img slick-arrow-2">
            <div className="single-small-img">
              <img
                src={process.env.PUBLIC_URL + `/img/product/1.png`}
                alt="Image"
              />
            </div>
            <div className="single-small-img">
              <img src="img/product/2.png" alt="Image" />
            </div>
            <div className="single-small-img">
              <img src="img/product/3.png" alt="Image" />
            </div>
            <div className="single-small-img">
              <img src="img/product/4.png" alt="Image" />
            </div>
            <div className="single-small-img">
              <img src="img/product/5.png" alt="Image" />
            </div>
            <div className="single-small-img">
              <img src="img/product/6.png" alt="Image" />
            </div>
            <div className="single-small-img">
              <img src="img/product/7.png" alt="Image" />
            </div> */}
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="modal-product-info shop-details-info pl-0">
          <div className="product-ratting">
            <ul>
              <li>
                <a href="#">
                  <i className="fas fa-star" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-star" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-star" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-star-half-alt" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="far fa-star" />
                </a>
              </li>
              <li className="review-total">
                {" "}
                <a href="#"> ( 95 Reviews )</a>
              </li>
            </ul>
          </div>
          <h3>
            {ProductFind.nameProduct ? ProductFind.nameProduct : "not found"}
          </h3>
          <div className="product-price">
            <span>$49.00</span>
            <del>$65.00</del>
          </div>
          <div className="modal-product-meta ltn__product-details-menu-1">
            <ul>
              <li>
                <strong>Categories:</strong>
                <span>
                  <a href="#">Parts</a>
                  <a href="#">Car</a>
                  <a href="#">Seat</a>
                  <a href="#">Cover</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="ltn__product-details-menu-2">
            <ul>
              <li>
                <div className="cart-plus-minus">
                  <input
                    type="text"
                    defaultValue={2}
                    name="qtybutton"
                    className="cart-plus-minus-box"
                  />
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
                  <span>ADD TO CART</span>
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
                <a href="#" title="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" title="Linkedin">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#" title="Instagram">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="ltn__safe-checkout">
            <h5>Guaranteed Safe Checkout</h5>
            <img src="img/icons/payment-2.png" alt="Payment Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFind;
