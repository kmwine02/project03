import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_RATING = gql`
  mutation addRating(
    $imdbID: String!
    $score: Int!
    $ID: ID!
    $title: String
    $image: String
  ) {
    addRating(
      imdbID: $imdbID
      score: $score
      ID: $ID
      title: $title
      image: $image
    ) {
      ratings {
        _id
      }
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation addMovie($imdbID: String!, $image: String!, $name: String!) {
    addMovie(imdbID: $imdbID, image: $image, name: $name) {
      name
    }
  }
`;
