import React from "react";
import Thead from "./Thead/Thead.js";
import Tbody from "./Tbody/Tbody.js";
import "./Table.css";

function Table(props) {
  return (
    <section className="table-container">
      <table className="table">
        <Thead />
        <Tbody tableData={props.tableData} handleItemSelect={props.handleItemSelect} />
      </table>
    </section>
  );
}

export default Table;
