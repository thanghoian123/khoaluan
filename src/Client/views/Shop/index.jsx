import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ListItem from "../../components/ListItem";
import * as action from "../../../redux/actions/actions";
import * as APIs from "../../../asset/APIs";
import Modal from "../../components/Modal";
import UltilizeCart from "../../components/UtilizeCart";
import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";
import AddToCartModal from "../../components/AddToCartModal";
import Pagination from "Client/components/Pagination";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function Shop(props) {
  const classes = useStyles();
  const products = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const [curProduct, setcurProduct] = useState({});
  const [search, setSearch] = useState("");
  const [curPage, setCurPage] = useState(1);
  const [open, setOpen] = useState(false);
  const pageSize = 12;

  useEffect(() => {
    setOpen(true);
    APIs.getListProduct(curPage - 1, pageSize)
      .then((resp) => {
        setOpen(false);
        dispatch(action.getProducts(resp.data.dataResponse.list));
      })
      .catch((err) => {
        console.log(err);
        setOpen(false);
      });
  }, [curPage]);

  const onShowModal = (data) => {
    if (!data) return;
    setcurProduct(data);
  };

  const onHandleChange = (e) => {
    setSearch(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    APIs.searchProduct(0, pageSize, search).then((resp) => {
      if (resp.data.error) {
        alert(resp.data.message);
      } else {
        dispatch(action.getProducts(resp.data.dataResponse.list));
      }
      console.log(resp.data);
      setOpen(false);
    });
  };

  return (
    <div style={{ backgroundColor: "#fff", color: "#000", paddingTop: "20px" }}>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* PRODUCT DETAILS AREA START */}
      <div className="ltn__product-area ltn__product-gutter mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="ltn__shop-options">
                <ul>
                  <li>
                    <div className="ltn__grid-list-tab-menu ">
                      <div className="nav">
                        <a
                          className="active show"
                          data-toggle="tab"
                          href="#liton_product_grid"
                        >
                          <i className="fas fa-th-large" />
                        </a>
                        <a data-toggle="tab" href="#liton_product_list">
                          <i className="fas fa-list" />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="showing-product-number text-right">
                      <span>Showing 1–12 of 18 results</span>
                    </div>
                  </li>
                  <li>
                    <div className="short-by text-center">
                      <select className="nice-select">
                        <option>Default Sorting</option>
                        <option>Sort by popularity</option>
                        <option>Sort by new arrivals</option>
                        <option>Sort by price: low to high</option>
                        <option>Sort by price: high to low</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-content" style={{ minHeight: "90vh" }}>
                <div
                  className="tab-pane fade active show"
                  id="liton_product_grid"
                >
                  <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                    <div className="row">
                      {products.map((item, index) => {
                        return (
                          <ListItem
                            key={index}
                            product={item}
                            onShowModal={onShowModal}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <Pagination
                totalPage={5}
                curPage={curPage}
                setCurPage={setCurPage}
              />

              <Modal product={curProduct} />
              <AddToCartModal product={curProduct} />
            </div>
            <div className="col-lg-4">
              <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
                {/* Category Widget */}
                <div className="widget ltn__menu-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border">
                    Product categories
                  </h4>
                  <ul>
                    <li>
                      <a href="#" className="customize-a">
                        Body{" "}
                        <span>
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        Interior{" "}
                        <span>
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        Lights{" "}
                        <span>
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        Parts{" "}
                        <span>
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        Tires{" "}
                        <span>
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        Uncategorized{" "}
                        <span>
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        Wheel{" "}
                        <span>
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Price Filter Widget */}
                <div className="widget ltn__price-filter-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border">
                    Filter by price
                  </h4>
                  <div className="price_filter">
                    <div className="price_slider_amount">
                      <input type="submit" defaultValue="Your range:" />
                      <input
                        type="text"
                        className="amount"
                        name="price"
                        placeholder="Add Your Price"
                      />
                    </div>
                    <div className="slider-range" />
                  </div>
                </div>
                {/* Top Rated Product Widget */}
                <div className="widget ltn__top-rated-product-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border">
                    Top Rated Product
                  </h4>
                  <ul>
                    <li>
                      <div className="top-rated-product-item clearfix">
                        <div className="top-rated-product-img">
                          <a
                            href="product-details.html"
                            className="customize-a"
                          >
                            <img src="img/product/1.png" alt="#" />
                          </a>
                        </div>
                        <div className="top-rated-product-info">
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
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="customize-a">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h6>
                            <a
                              href="product-details.html"
                              className="customize-a"
                            >
                              Mixel Solid Seat Cover
                            </a>
                          </h6>
                          <div className="product-price">
                            <span>$49.00</span>
                            <del>$65.00</del>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="top-rated-product-item clearfix">
                        <div className="top-rated-product-img">
                          <a
                            href="product-details.html"
                            className="customize-a"
                          >
                            <img src="img/product/2.png" alt="#" />
                          </a>
                        </div>
                        <div className="top-rated-product-info">
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
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="customize-a">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h6>
                            <a
                              href="product-details.html"
                              className="customize-a"
                            >
                              Vegetables Juices
                            </a>
                          </h6>
                          <div className="product-price">
                            <span>$49.00</span>
                            <del>$65.00</del>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="top-rated-product-item clearfix">
                        <div className="top-rated-product-img">
                          <a
                            href="product-details.html"
                            className="customize-a"
                          >
                            <img src="img/product/3.png" alt="#" />
                          </a>
                        </div>
                        <div className="top-rated-product-info">
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
                          <h6>
                            <a
                              href="product-details.html"
                              className="customize-a"
                            >
                              Coil Spring Conversion
                            </a>
                          </h6>
                          <div className="product-price">
                            <span>$49.00</span>
                            <del>$65.00</del>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Search Widget */}
                <div className="widget ltn__search-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border">
                    Search Objects
                  </h4>
                  <form onSubmit={onHandleSubmit}>
                    <input
                      type="text"
                      name="search"
                      placeholder="Search your keyword..."
                      onChange={onHandleChange}
                    />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>
                {/* Tagcloud Widget */}
                <div className="widget ltn__tagcloud-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border">
                    Popular Tags
                  </h4>
                  <ul>
                    <li>
                      <a href="#" className="customize-a">
                        Popular
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        desgin
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        ux
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        usability
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        develop
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        icon
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        Car
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        Service
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        Repairs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        Auto Parts
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        Oil
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        Dealer
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        Oil Change
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        Body Color
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Size Widget */}
                <div className="widget ltn__tagcloud-widget ltn__size-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border">
                    Product Size
                  </h4>
                  <ul>
                    <li>
                      <a href="#" className="customize-a">
                        S
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        M
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        L
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        XL
                      </a>
                    </li>
                    <li>
                      <a href="#" className="customize-a">
                        XXL
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Color Widget */}
                <div className="widget ltn__color-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border">
                    Product Color
                  </h4>
                  <ul>
                    <li className="black">
                      <a href="#" className="customize-a" />
                    </li>
                    <li className="white">
                      <a href="#" className="customize-a" />
                    </li>
                    <li className="red">
                      <a href="#" className="customize-a" />
                    </li>
                    <li className="silver">
                      <a href="#" className="customize-a" />
                    </li>
                    <li className="gray">
                      <a href="#" className="customize-a" />
                    </li>
                    <li className="maroon">
                      <a href="#" className="customize-a" />
                    </li>
                    <li className="yellow">
                      <a href="#" className="customize-a" />
                    </li>
                    <li className="olive">
                      <a href="#" className="customize-a" />
                    </li>
                    <li className="lime">
                      <a href="#" className="customize-a" />
                    </li>
                    <li className="green">
                      <a href="#" className="customize-a" />
                    </li>
                    <li className="aqua">
                      <a href="#" className="customize-a" />
                    </li>
                    <li className="teal">
                      <a href="#" className="customize-a" />
                    </li>
                    <li className="blue">
                      <a href="#" className="customize-a" />
                    </li>
                    <li className="navy">
                      <a href="#" className="customize-a" />
                    </li>
                    <li className="fuchsia">
                      <a href="#" className="customize-a" />
                    </li>
                    <li className="purple">
                      <a href="#" className="customize-a" />
                    </li>
                    <li className="pink">
                      <a href="#" className="customize-a" />
                    </li>
                    <li className="nude">
                      <a href="#" className="customize-a" />
                    </li>
                    <li className="orange">
                      <a href="#" className="customize-a" />
                    </li>
                    <li>
                      <a href="#" className="customize-a" className="orange" />
                    </li>
                    <li>
                      <a href="#" className="customize-a" className="orange" />
                    </li>
                  </ul>
                </div>
                {/* Banner Widget */}
                <div className="widget ltn__banner-widget">
                  <a href="shop.html">
                    <img src="img/banner/banner-2.jpg" alt="#" />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      {/* PRODUCT DETAILS AREA END */}
    </div>
  );
}

export default Shop;
