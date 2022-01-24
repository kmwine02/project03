import React, { useState } from "react";
import Rating from "react-rating-scale";
import { ADD_RATING, ADD_MOVIE } from "../utils/mutations";
import AuthService from "../utils/auth";
import { useMutation } from "@apollo/client";

export default function MovieRating({ movie }) {
  const [userRating, setUserRating] = useState(0);
  const [addRating, { ratingError }] = useMutation(ADD_RATING);
  // const [addMovie, { movieError }] = useMutation(ADD_MOVIE);

  const callRating = async (e) => {
    if (!AuthService.loggedIn()) {
      return window.location.replace("/login");
    }
    const user = AuthService.getProfile();
    const rating = e;
    try {
      const { data } = await addRating({
        variables: {
          imdbID: movie.id ? movie.id : movie.imdbID,
          score: rating,
          ID: user.data._id,
          title: movie.title,
          image: movie.image,
        },
      });

      // const { ratedMovie } = await addMovie({
      //   variables: { imdbID: movie.id, name: movie.title, image: movie.image },
      // });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Rating
        length={5}
        // width={30}
        rating={movie.score}
        value={userRating}
        onSelect={callRating}
      />
    </div>
  );
}
