import React from "react";
import "./SearchForm.css";

function SearchForm(props) {
  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="Your search"
        className="search-form-input"
      />
      <button className="form-btn">Search</button>
    </form>
  );
}

export default SearchForm;
