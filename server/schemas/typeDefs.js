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
  type Movie{
    _id: ID
    imdbID: String
    name: String
    image: String
  }
  type Rating {
    _id: ID
    imdbID: String
    score: Int
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
    addRating(imdbID: String!, score: Int!): User
  }
`;

module.exports = typeDefs;
