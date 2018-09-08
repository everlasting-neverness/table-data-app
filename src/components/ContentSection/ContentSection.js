import React from "react";
import Table from "../Table/Table.js";
import InfoBlock from "../InfoBlock/InfoBlock.js";
import Pages from "../Pages/Pages.js";
import "./ContentSection.css";

class ContentSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tableData = this.props.data.filter(item => {
      if (!this.props.userSearchInput) {
        return true;
      } else {
        let match;
        for (let value in item) {
          if (value === "address") {
            for (let adressValue in item[value]) {
              match = item[value][adressValue]
                .toLowerCase()
                .includes(this.props.userSearchInput.toLowerCase())
                ? true
                : false;
              if (match === true) return true;
            }
          } else if (value !== "id") {
            match = String(item[value])
              .toLowerCase()
              .includes(this.props.userSearchInput.toLowerCase())
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
            currentPage={this.props.currentPage}
            length={tableData.length}
            handlePageChange={this.props.handlePageChange}
          />
        ) : (
          <div />
        )}
        <Table
          tableData={tableData}
          userSearchInput={this.props.userSearchInput}
          handleItemSelect={this.props.handleItemSelect}
          sortValue={this.props.sortValue}
          sortDirectionAsc={this.props.sortDirectionAsc}
          handleUserSort={this.props.handleUserSort}
          currentPage={this.props.currentPage}
        />
        <InfoBlock currentItem={this.props.currentItem} />
      </section>
    );
  }
}

export default ContentSection;
