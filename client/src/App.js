import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./components/card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/search";
import HomePage from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
