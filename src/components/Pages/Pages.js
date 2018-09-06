import React from "react";
import "./Pages.css";

function Pages(props) {
  let current = props.currentPage,
    last = props.length / 50,
    delta = 2,
    left = current - delta,
    right = current + delta + 1,
    range = [],
    rangeWithDots = [],
    l;

  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(
          <button
            className={`pages-btn ${
              props.currentPage === l + 1 ? "pages-btn-active" : ""
            }`}
            value={l + 1}
            onClick={props.handlePageChange}
          >
            {l + 1}
          </button>
        );
      } else if (i - l !== 1) {
        rangeWithDots.push(<span className="dots">...</span>);
      }
    }
    rangeWithDots.push(
      <button
        className={`pages-btn ${
          props.currentPage === i ? "pages-btn-active" : ""
        }`}
        value={i}
        onClick={props.handlePageChange}
      >
        {i}
      </button>
    );
    l = i;
  }

  return <div className="pagination-buttons">{rangeWithDots}</div>;
}

export default Pages;
