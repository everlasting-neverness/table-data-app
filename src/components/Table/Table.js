import React from "react";
import Thead from "./Thead/Thead.js";
import Tbody from "./Tbody/Tbody.js";
import "./Table.css";

function Table(props) {
  return (
    <div className="table-container">
      <table className="table">
        <Thead
          handleUserSort={props.handleUserSort}
          sortValue={props.sortValue}
          sortDirectionAsc={props.sortDirectionAsc}
        />
        <Tbody
          tableData={props.tableData}
          currentPage={props.currentPage}
          handleItemSelect={props.handleItemSelect}
        />
      </table>
    </div>
  );
}

export default Table;
