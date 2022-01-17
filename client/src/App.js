import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./components/card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/search";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

import Navigation from "./components/navigation";
function App() {
  return (
    <Router>
      { <Navigation /> }

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
