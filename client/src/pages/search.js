import React, { useState } from "react";
import Card from "../components/card";

export default function SearchPage() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieData, setMovieData] = useState([]);

  const callAPI = async (e) => {
    e.preventDefault();
    // TODO: Add API call information...
    console.log(`API search for ${movieTitle}`);
    // const APIURL = "";
    // const response = await fetch(APIURL);
    // const data = await response.json();

    let tempData = [
      {
        title: "Christmas Vacation",
        rating: 5,
      },
      {
        title: "Die Hard",
        rating: 4,
      },
    ];
    setMovieData(tempData);
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
      <Card movieData={movieData} />
    </div>
  );
}
