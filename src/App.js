import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

const App = () => {
  return (
    <>
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox />
      </div>
      <CardList props={robots} />
    </>
  );
};

export default App;
