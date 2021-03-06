import React, { useState } from "react";
import MovieCard from "../components/card";
import "../components/css/search.css";
import { CgSearch } from "react-icons/cg";

export default function SearchPage() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [errorState, setErrorState] = useState("");
  const status = true;

  const callAPI = async (e) => {
    e.preventDefault();
    // TODO: Get route working to hide api key
    console.log(`API search for ${movieTitle}`);
    const APIURL = `https://imdb-api.com/en/API/Search/k_gn6a28pu/${movieTitle}`;
    // const callAPI = await fetch("api/search")
    const response = await fetch(APIURL);
    const data = await response.json();
    if(!response.ok){
      status = false;
    }
    setMovieData(data.results);
  };
  return (
    <>
      <div className="search-form">
        <div id="content">
          <form className="form-inline" onSubmit={callAPI}>
            <div className="input-group">
              <input
                type="text"
                id="search"
                className="form-control search-form"
                value={movieTitle}
                onChange={(e) => setMovieTitle(e.target.value)}
                placeholder="Movie Title"
                required
              />
              <span className="input-group-btn">
                <button
                  id="search-this submit"
                  type="button"
                  className="pull-right btn btn-default search-btn"
                >
                  <CgSearch />
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
      {console.log(movieData)}
      { status === false  ? <div className="notFound">Not found</div>:<div className="isFound"></div> }
      <div className="cardResults">
        <MovieCard className="movie-card pageResults" movieData={movieData} />
      </div>

    </>
  );
}
