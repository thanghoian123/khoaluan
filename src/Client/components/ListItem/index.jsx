import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../../redux/actions/actions";

function ListItem({ product, onShowModal }) {
  const dispatch = useDispatch();
  const onAddToCart = () => {
    let tempProduct = Object.assign({}, product);
    tempProduct.quantity = 1;
    console.log(tempProduct, "ấdasda");

    dispatch(actions.addCart(tempProduct));
  };
  return (
    <div className="col-xl-4 col-sm-6 col-6">
      <div className="ltn__product-item ltn__product-item-3 text-center">
        <div className="product-img">
          <a href="product-details.html" className="customize-a">
            {/* <img src={process.env.PUBLIC_URL + `/img/product/1.png`} alt="#" /> */}
            <img src={product.imgUrl[0]} alt="#" />
          </a>
          <div className="product-badge">
            <ul>
              <li className="sale-badge">New</li>
            </ul>
          </div>
          <div className="product-hover-action">
            <ul>
              <li>
                <a
                  href="#"
                  className="customize-a"
                  title="Quick View"
                  data-toggle="modal"
                  data-target="#quick_view_modal"
                  onClick={() => {
                    onShowModal(product);
                  }}
                >
                  <i className="far fa-eye" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="customize-a"
                  title="Add to Cart"
                  data-toggle="modal"
                  data-target="#add_to_cart_modal"
                  onClick={() => {
                    onShowModal(product);
                    onAddToCart();
                  }}
                >
                  <i className="fas fa-shopping-cart" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="customize-a"
                  title="Wishlist"
                  data-toggle="modal"
                  data-target="#liton_wishlist_modal"
                >
                  <i className="far fa-heart" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-info">
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
            </ul>
          </div>
          <h2 className="product-title">
            <a href="product-details.html" className="customize-a">
              {product.nameProduct}
            </a>
          </h2>
          <div className="product-price">
            <span>${product.prices}</span>
            <del>${product.prices}</del>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
