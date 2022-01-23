import React from "react";

import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Card from "../components/card";
import { QUERY_ME } from "../utils/queries";

import AuthService from "../utils/auth";

const ProfilePage = () => {
  // console.log(AuthService.getToken());
  // console.log(AuthService.getProfile());
  // console.log(AuthService.loggedIn());
  const user = AuthService.getProfile();
  // console.log(user.data.username);
  const { loading, data } = useQuery(QUERY_ME, {
    variables: {},
  });
  console.log(data);

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

// const ProfilePage = () => {
//   const { profileId } = useParams();

//   // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
//   const { loading, data } = useQuery(QUERY_ME, {
//     variables: { username: "demo" },
//   });

//   // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
//   const profile = data?.me || data?.profile || {};

//   // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
//   if (
//     AuthService.loggedIn() &&
//     AuthService.getProfile().data._id === profileId
//   ) {
//     return <Navigate to="/me" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!profile?.name) {
//     console.log(profile);
//     console.log(data);
//     return (
//       <h4>
//         You need to be logged in to see your profile page. Use the navigation
//         links above to sign up or log in!
//       </h4>
//     );
//   }

//   return (
//     <div>
//       <h2 className="card-header">{`${profile.name}`}</h2>

//       {profile.ratings?.length > 0}

//       <div className="my-4 p-4" style={{ border: "1px dotted #1a1a1a" }}></div>
//     </div>
//   );
// };

export default ProfilePage;
