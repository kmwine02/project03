import React from "react";
import MovieRating from "./rating";


export default function Card({ movieData }) {
  return (
    <ul>
      {movieData.map((movie) => (
        <li className="movie-card" key={movie.title}>
          <img src= {movie.image} alt="box-art"></img>
          <div className="card-text">
            <p>
              <span>{movie.title}</span>
              <br></br>
              <span>{movie.rating}</span>
            </p>
            <MovieRating />
          </div>
        </li>
      ))}
    </ul>

  );
}
