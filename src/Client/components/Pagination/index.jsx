import React, { useState } from "react";

function Pagination({ totalPage, curPage, setCurPage }) {
  var a = [];
  for (var i = 1; i <= totalPage; i++) {
    a.push(i);
  }

  return (
    <div className="ltn__pagination-area text-center">
      <div className="ltn__pagination">
        <ul>
          <li>
            <a href="#" className="customize-a">
              <i className="fas fa-angle-double-left" />
            </a>
          </li>
          {a.map((item) => {
            return (
              <li
                style={{ cursor: "pointer" }}
                key={item}
                onClick={() => {
                  setCurPage(item);
                }}
                className={item === curPage ? "active" : ""}
              >
                <a className="customize-a">{item}</a>
              </li>
            );
          })}
          <li>
            <a href="#" className="customize-a">
              <i className="fas fa-angle-double-right" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
