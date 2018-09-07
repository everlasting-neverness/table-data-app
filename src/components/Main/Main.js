import React from "react";
import { getData } from "../../helpers/getData.js";
import { sortData } from "../../helpers/sortData.js";
import Table from "../Table/Table.js";
import InfoBlock from "../InfoBlock/InfoBlock.js";
import SearchForm from "../SearchForm/SearchForm.js";
import SelectMenu from "../SelectMenu/SelectMenu.js";
import Pages from "../Pages/Pages.js";
import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserSearch = this.handleUserSearch.bind(this);
    this.handleSelector = this.handleSelector.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleUserSort = this.handleUserSort.bind(this);
    this.handleItemSelect = this.handleItemSelect.bind(this);
    this.state = {
      data: null,
      amount: "",
      loading: false,
      userSearchInput: "",
      currentItem: null,
      currentPage: 1,
      sortValue: "id",
      sortDirectionAsc: true
    };
  }

  handleUserSearch(e) {
    e.preventDefault();
    const userInput = e.target[0].value;
    this.setState({ userSearchInput: userInput });
  }

  handleSelector(e) {
    e.preventDefault();
    const value = e.target.children[0].value;
    this.setState({
      data: null,
      amount: value,
      loading: true,
      currentItem: null
    });
    getData(fetchedData => {
      this.setState({
        data: sortData(fetchedData, "id", true),
        loading: false
      });
    }, value);
  }

  handleUserSort(e) {
    const value =
      e.target.tagName === "I" ? e.target.parentElement.value : e.target.value;
    this.setState({
      sortValue: value,
      sortDirectionAsc: !this.state.sortDirectionAsc,
      data: sortData(this.state.data, value, !this.state.sortDirectionAsc)
    });
  }

  handlePageChange(e) {
    this.setState({ currentPage: Number(e.target.value) });
  }

  handleItemSelect(e) {
    const chosenItem = this.state.data.filter(
      item => item.id === Number(e.target.parentElement.dataset.id)
    )[0];
    this.setState({ currentItem: chosenItem });
  }

  render() {
    return (
      <div className={`main-block ${this.state.loading ? "spinner" : ""}`}>
        <h1 className="header">Table App</h1>
        <nav className="navbar">
          {this.state.data ? (
            <SearchForm handleUserSearch={this.handleUserSearch} />
          ) : (
            <div />
          )}
          <SelectMenu
            amount={this.state.amount}
            handleSelector={this.handleSelector}
          />
        </nav>
        {!this.state.data ? (
          <div />
        ) : (
          <section>
            {this.state.data.length > 50 ? (
              <Pages
                currentPage={this.state.currentPage}
                length={this.state.data.length}
                handlePageChange={this.handlePageChange}
              />
            ) : (
              <div />
            )}
            <Table
              tableData={this.state.data}
              userSearchInput={this.state.userSearchInput}
              handleItemSelect={this.handleItemSelect}
              sortValue={this.state.sortValue}
              sortDirectionAsc={this.state.sortDirectionAsc}
              handleUserSort={this.handleUserSort}
            />
            <InfoBlock currentItem={this.state.currentItem} />
          </section>
        )}
      </div>
    );
  }
}

export default Main;
