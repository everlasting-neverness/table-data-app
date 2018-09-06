import React from "react";
import Table from "../Table/Table.js";
import InfoBlock from "../InfoBlock/InfoBlock.js";
import { getData } from "../../helpers/getData.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelector = this.handleSelector.bind(this);
    this.state = {
      data: null,
      amount: ""
    };
  }

  handleSelector(e) {
    e.preventDefault();
    const value = e.target.children[1].value;
    this.setState({ amount: value });
    console.log(value);
    getData(fetchedData => {
      this.setState({ data: fetchedData });
    }, value);
  }

  render() {
    if (!this.state.data) {
      return (
        <div className="initial-block">
          <form onSubmit={this.handleSelector}>
            <h2>Choose the amount of data</h2>
            <select
              name="amount-selector"
              className="amount-selector"
              defaultValue={this.state.amount}
            >
              <option value="large">Large</option>
              <option value="small">Small</option>
            </select>
            <button>Submit</button>
          </form>
        </div>
      );
    }
    return (
      <div className="main-block">
        <h1 className="header">Table App</h1>
        <Table tableData={this.state.data} />
        <InfoBlock />
      </div>
    );
  }
}

export default Main;
