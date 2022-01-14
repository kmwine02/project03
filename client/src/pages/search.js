import React, { useState } from "react";
import Card from "../components/card";
export default function SearchPage({ searchAPI }) {
  const [movieTitle, setMovieTitle] = useState("");
  const callAPI = (e) => {
    e.preventDefault();
    window.alert(`Searching for: ${movieTitle}`);
    searchAPI(movieTitle);
  };

  return (
    <div>
      <form onSubmit={callAPI}>
        <label>Movie Title: </label>
        <input
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          type="text"
        ></input>
        <button id="submit">Search</button>
      </form>
      <Card movieData />
    </div>
  );
}
