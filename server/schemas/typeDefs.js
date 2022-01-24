const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    movies: [Movie]
    ratings: [Rating]
  }
  type Movie {
    _id: ID
    imdbID: String
    name: String
    image: String
  }
  type Rating {
    _id: ID
    imdbID: String
    score: Int
    title: String
    image: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    movies: [Movie]
    user(username: String!): User
    ratings: [Rating]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addRating(
      imdbID: String!
      score: Int!
      ID: ID!
      title: String
      image: String
    ): User
    addMovie(imdbID: String!, name: String!, image: String!): Movie
  }
`;

module.exports = typeDefs;
