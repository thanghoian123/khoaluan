import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import * as APIs from "../../../asset//APIs";
import * as actions from "../../../redux/actions/actions";

function BillDetail(props) {
  const carts = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const params = useParams();
  const [newBill, setNewBill] = useState([]);
  const username = localStorage.getItem("username") || "";
  const accessToken = localStorage.getItem("accessToken") || "";
  useEffect(() => {
    APIs.getBillById(params.id).then((resp) => {
      // console.log(resp.data.dataResponse.details);
      const tempBill = resp.data.dataResponse.details.slice().map((item) => {
        return {
          ...item,
          productID: item.product.id,
          nameProduct: item.product.nameProduct,
          typeCode: item.product.typeCode,
          categoryCode: item.product.categoryCode,
          imgUrl: item.product.imgUrl,
          description: item.product.description,
        };
      });
      dispatch(actions.getCarts(tempBill));
      setNewBill({ ...resp.data.dataResponse, details: tempBill });
    });
  }, [params.id]);

  const onChangeQuantity = (e, index) => {
    const temp = newBill.details.slice();
    temp[index].quantity = parseInt(e.target.value);
    setNewBill({ ...newBill, details: temp });
  };

  const onRemoveItem = (index) => {
    const temp = newBill.details.slice();
    temp.splice(index, 1);
  };

  const onHandleSubmit = () => {
    let totalBill = 0;
    for (let i = 0; i < newBill.details.length; i++) {
      totalBill += newBill.details[i].quantity * newBill.details[i].prices;
    }
    const temp = {
      address: newBill.address,
      city: newBill.city,
      email: newBill.email,
      phoneNumber: newBill.phoneNumber,
      totalBill: totalBill,
      details: newBill.details.map((item) => ({
        productID: item.productID,
        prices: item.prices,
        quantity: item.quantity,
        // totalProduct: item.prices * item.quantity,
      })),
    };

    console.log(temp);
    APIs.updBill(username, params.id, temp, accessToken).then((resp) => {
      console.log(resp.data.status);
      if (resp.data.status === "OK") {
        alert(resp.data.message)
      }
    });
  };

  return (
    <div
      className="liton__shoping-cart-area mb-120"
      style={{ backgroundColor: "#fff", paddingTop: "20px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="shoping-cart-inner">
              <div className="shoping-cart-table table-responsive">
                <table className="table">
                  <tbody>
                    {(carts || []).map((item, index) => {
                      return (
                        <tr key={index}>
                          <td
                            className="cart-product-remove"
                            onClick={() => onRemoveItem(index)}
                          >
                            x
                          </td>
                          <td className="cart-product-image">
                            <a
                              href="product-details.html"
                              className="customize-a"
                            >
                              <img src={item.imgUrl[0]} alt="#" />
                            </a>
                          </td>
                          <td className="cart-product-info">
                            <h4>
                              <a
                                href="product-details.html"
                                className="customize-a"
                              >
                                {item.nameProduct}
                              </a>
                            </h4>
                          </td>
                          <td className="cart-product-price">${item.prices}</td>
                          <td className="cart-product-quantity">
                            <div className="cart-plus-minus">
                              <input
                                type="text"
                                defaultValue={item.quantity}
                                name="qtybutton"
                                className="cart-plus-minus-box"
                                onChange={(e) => onChangeQuantity(e, index)}
                              />
                            </div>
                          </td>
                          <td className="cart-product-subtotal">
                            ${item.quantity * item.prices}
                          </td>
                        </tr>
                      );
                    })}

                    <tr className="cart-coupon-row">
                      <td colSpan={6}>
                        <div className="cart-coupon">
                          <input
                            type="text"
                            name="cart-coupon"
                            placeholder="Coupon code"
                          />
                          <button
                            type="submit"
                            className="btn theme-btn-2 btn-effect-2"
                          >
                            Apply Coupon
                          </button>
                        </div>
                      </td>
                      <td>
                        <button
                          type="submit"
                          className="btn theme-btn-2 btn-effect-2-- disabled"
                          onClick={onHandleSubmit}
                        >
                          Update Cart
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="shoping-cart-total mt-50">
                <h4>Cart Totals</h4>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td>$618.00</td>
                    </tr>
                    <tr>
                      <td>Shipping and Handing</td>
                      <td>$15.00</td>
                    </tr>
                    <tr>
                      <td>Vat</td>
                      <td>$00.00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Order Total</strong>
                      </td>
                      <td>
                        <strong>$633.00</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="btn-wrapper text-right">
                  <a
                    href="checkout.html"
                    className="theme-btn-1 btn btn-effect-1"
                  >
                    Proceed to checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillDetail;
