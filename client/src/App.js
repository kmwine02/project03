import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./components/card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/search";
import HomePage from "./pages/home";

function App() {
  const [movies, setMovies] = useState([]);

  const searchAPI = async (movie) => {
    let APIURL = "";
    window.alert(`API call initiated for ${movie}`);
    // const response = await fetch(APIURL);
    // const data = await response.json();

    // setMovies(data);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route
          path="/search"
          element={<SearchPage onFormSubmit={searchAPI} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
