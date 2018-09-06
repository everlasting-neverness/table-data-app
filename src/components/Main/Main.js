import React from "react";
import Table from "../Table/Table.js";
import InfoBlock from "../InfoBlock/InfoBlock.js";
import { getData } from "../../helpers/getData.js";
import SelectMenu from "../SelectMenu/SelectMenu.js";
import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelector = this.handleSelector.bind(this);
    this.handleItemSelect = this.handleItemSelect.bind(this);
    this.state = {
      data: null,
      amount: "",
      loading: false,
      currentItem: null
    };
  }

  handleSelector(e) {
    e.preventDefault();
    const value = e.target.children[0].value;
    this.setState({ data: null, amount: value, loading: true, currentItem: null });
    getData(fetchedData => {
      this.setState({ data: fetchedData, loading: false });
    }, value);
  }

  handleItemSelect(e) {
    const chosenItem = this.state.data.filter(
      item => item.id === Number(e.target.parentElement.dataset.id)
    )[0];
    console.log(chosenItem)
    this.setState({ currentItem: chosenItem });
  }

  render() {
    return (
      <div className={`main-block ${this.state.loading ? "spinner" : ""}`}>
        <h1 className="header">Table App</h1>
        <SelectMenu
          amount={this.state.amount}
          handleSelector={this.handleSelector}
        />
        {!this.state.data ? (
          <div />
        ) : (
          <div>
            <Table
              tableData={this.state.data}
              handleItemSelect={this.handleItemSelect}
            />
            <InfoBlock currentItem={this.state.currentItem} />
          </div>
        )}
      </div>
    );
  }
}

export default Main;
