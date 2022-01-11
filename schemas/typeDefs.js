const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Query {
    ratings: [Ratings]!
  }

  type Mutation {
    addRating(ratingMovie: String!, rating: String!): Ratings
`;

module.exports = typeDefs;
