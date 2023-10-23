import React from "react";
import { robots } from "./robots";

const SearchBox = () => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue outline-0 fw5"
        type="search"
        placeholder="search Robots"
      />
    </div>
  );
};

export default SearchBox;
