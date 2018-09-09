import React from "react";
import Table from "../Table/Table.js";
import InfoBlock from "../InfoBlock/InfoBlock.js";
import Pages from "../Pages/Pages.js";
import "./ContentSection.css";

function ContentSection(props) {
  let tableData = props.data.filter(item => {
    if (!props.userSearchInput) {
      return true;
    } else {
      let match;
      for (let value in item) {
        if (value === "address") {
          for (let adressValue in item[value]) {
            match = item[value][adressValue]
              .toLowerCase()
              .includes(props.userSearchInput.toLowerCase())
              ? true
              : false;
            if (match === true) return true;
          }
        } else if (value !== "id") {
          match = String(item[value])
            .toLowerCase()
            .includes(props.userSearchInput.toLowerCase())
            ? true
            : false;
          if (match) return true;
        }
      }
      return match;
    }
  });
  return (
    <section className="content-section">
      {tableData.length > 50 ? (
        <Pages
          currentPage={props.currentPage}
          length={tableData.length}
          handlePageChange={props.handlePageChange}
        />
      ) : null}
      <Table
        tableData={tableData}
        userSearchInput={props.userSearchInput}
        handleItemSelect={props.handleItemSelect}
        sortValue={props.sortValue}
        sortDirectionAsc={props.sortDirectionAsc}
        handleUserSort={props.handleUserSort}
        currentPage={props.currentPage}
      />
      <InfoBlock currentItem={props.currentItem} />
    </section>
  );
}

export default ContentSection;
