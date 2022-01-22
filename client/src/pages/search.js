import React, { useState } from "react";
import MovieCard from "../components/card";

export default function SearchPage() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieData, setMovieData] = useState([]);

  const callAPI = async (e) => {
    e.preventDefault();
    // TODO: Get route working to hide api key
    console.log(`API search for ${movieTitle}`);
    const APIURL = `https://imdb-api.com/en/API/Search/k_gn6a28pu/${movieTitle}`;
    // const callAPI = await fetch("api/search")
    const response = await fetch(APIURL);
    const data = await response.json();
    setMovieData(data.results);
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
      <MovieCard movieData={movieData} />
    </div>
  );
}
