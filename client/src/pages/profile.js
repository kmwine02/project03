import React from "react";

import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Card from "../components/card";
import { QUERY_ME } from "../utils/queries";

import AuthService from "../utils/auth";

const ProfilePage = () => {
  const user = AuthService.getProfile();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: {},
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>{data.me.username}'s Movie Ratings</div>
      <br></br>
      <Card movieData={data.me.ratings} />
    </>
  );
};

export default ProfilePage;
