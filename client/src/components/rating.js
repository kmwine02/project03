import React, { useState } from "react";
import Rating from "react-rating-scale";
import { ADD_RATING } from "../utils/mutations";
import AuthService from "../utils/auth";
import { useMutation } from "@apollo/client";

export default function MovieRating({ movie }) {
  const [userRating, setUserRating] = useState(0);
  const [addRating, { error }] = useMutation(ADD_RATING);

  const callRating = async (e) => {
    if (!AuthService.loggedIn()) {
      return window.location.replace("/login");
    }
    const user = AuthService.getProfile();
    const rating = e;
    console.log(
      `${user.data.username} (${user.data._id}) rates ${movie.title} (${movie.id}) - ${rating} trees!`
    );
    try {
      console.log(`${movie.id} and ${rating}`);
      const { data } = await addRating({
        variables: { imdbID: movie.id, score: rating, ID: user.data._id },
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Rating
        length={5}
        // width={30}
        value={userRating}
        onSelect={callRating}
      />
    </div>
  );
}
