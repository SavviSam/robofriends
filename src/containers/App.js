import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBoundary from "../components/ErrorBoundary";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <div className="tc vh-100 flex items-center justify-center">
      <h1 className="title">Loading</h1>
    </div>
  ) : (
    <div className="tc">
      <div className="tc">
        <h1 className="title ma0">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
      </div>
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filterRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
