import React, { useState } from "react";
import Rating from "react-rating-scale";

export default function MovieRating({ movie }) {
  const [userRating, setUserRating] = useState(0);

  const callRating = (e) => {
    const rating = e;
    console.log(`User rates ${movie} - ${rating} trees!`);
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
