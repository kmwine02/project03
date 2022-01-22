import React, { useState } from "react";
import Rating from "react-rating-scale";
import { ADD_RATING } from "../utils/mutations";
import AuthService from "../utils/auth";
import { useMutation, useQuery } from "@apollo/client";

export default function MovieRating({ movie }) {
  const [userRating, setUserRating] = useState(0);
  const { loading, data } = useMutation(ADD_RATING, {
    variables: { username: user.data.username },
  });
  console.log(data);

  const callRating = (e) => {
    const rating = e;
    console.log(`User rates ${movie.title} - ${rating} trees!`);
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
