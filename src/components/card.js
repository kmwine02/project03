import React from "react";
import MovieRating from "./rating";

export default function Card() {
  const movie = {
    title: "Elf",
    rating: 3,
  };
  return (
    <div class="movie-card">
      <img src=""></img>
      <div class="card-text">
        <p>
          <span>{movie.title}</span>
          <br></br>
          <span>{movie.rating}</span>
        </p>
        <MovieRating />
      </div>
    </div>
  );
}
