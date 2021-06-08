import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as APIs from "../../../asset/APIs";
import * as actions from "../../../redux/actions/actions";

function ListBill() {
  const bill = useSelector((state) => state.billReducer);
  const dispatch = useDispatch();
  const username = localStorage.getItem("username");
  useEffect(() => {
    APIs.findBill(username, 0, 100).then((resp) => {
      console.log(resp.data.dataResponse.list);
      dispatch(actions.getBills(resp.data.dataResponse.list));
    });
  }, []);
  console.log(bill, "billl");
  return (
    <div>
      <ul>
        {bill.map((item, index) => {
          if (item.billStatus === "PENDING") {
            return (
              <li key={index}>
                <Link className="customize-a" to={`bill-detail/${item.id}`}>
                  {item.phoneNumber}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default ListBill;
