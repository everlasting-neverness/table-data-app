import React from "react";
import { getData } from "../../helpers/getData.js";
import { sortData } from "../../helpers/sortData.js";
import SearchForm from "../SearchForm/SearchForm.js";
import SelectMenu from "../SelectMenu/SelectMenu.js";
import ContentSection from "../ContentSection/ContentSection.js";
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
      sortDirectionAsc: true,
      loadingError: false
    };
  }

  handleUserSearch(e) {
    e.preventDefault();
    const userInput = e.target[0].value;
    this.setState({
      userSearchInput: userInput,
      currentItem: null,
      currentPage: 1
    });
  }

  handleSelector(e) {
    e.preventDefault();
    const value = e.target.children[0].value;
    this.setState({
      data: null,
      amount: value,
      loading: true,
      userSearchInput: "",
      currentItem: null,
      currentPage: 1,
      sortValue: "id",
      sortDirectionAsc: true
    });
    getData(fetchedData => {
      this.setState({
        data: fetchedData ? sortData(fetchedData, "id", true) : null,
        loading: false,
        loadingError: !fetchedData ? true : false
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
    const value = Number(e.target.value);
    this.setState({ currentPage: value });
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
          ) : null}
          <SelectMenu
            amount={this.state.amount}
            handleSelector={this.handleSelector}
          />
        </nav>
        {this.state.loadingError ? (
          <div className="error-message">Error loading data</div>
        ) : null}
        {!this.state.data ? null : (
          <ContentSection
            {...this.state}
            handlePageChange={this.handlePageChange}
            handleItemSelect={this.handleItemSelect}
            handleUserSort={this.handleUserSort}
          />
        )}
      </div>
    );
  }
}

export default Main;
