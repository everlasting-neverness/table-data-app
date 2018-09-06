import React from "react";
import "./SelectMenu.css";

function SelectMenu(props) {
  return (
    <div className="select-menu">
      <h3>Choose the amount of data</h3>
      <form className="amount-selector-form" onSubmit={props.handleSelector}>
        <select
          name="amount-selector"
          className="amount-selector"
          defaultValue={props.amount}
        >
          <option value="large">Large</option>
          <option value="small">Small</option>
        </select>
        <button className="form-btn">Submit</button>
      </form>
    </div>
  );
}

export default SelectMenu;
