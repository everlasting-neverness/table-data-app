import React from "react";
import "./Thead.css";

function Thead(props) {
  return (
    <thead className="thead">
      <tr className="tr">
        <th className="th">
          <button className="th-btn">
            id <i className="fas fa-chevron-circle-up" />
          </button>
        </th>
        <th className="th">
          <button className="th-btn">
            firstName <i className="fas fa-chevron-circle-up" />
          </button>
        </th>
        <th className="th">
          <button className="th-btn">
            lastName <i className="fas fa-chevron-circle-up" />
          </button>
        </th>
        <th className="th">
          <button className="th-btn">
            email <i className="fas fa-chevron-circle-up" />
          </button>
        </th>
        <th className="th">
          <button className="th-btn">
            phone <i className="fas fa-chevron-circle-up" />
          </button>
        </th>
      </tr>
    </thead>
  );
}

export default Thead;
