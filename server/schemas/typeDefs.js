const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    ratings: [Rating]!
  }
  type Rating {
    _id: ID
    commentText: String
    createdAt: String
    treeCount: Int
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(username: String!): User
    ratings: [Rating]!
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addRating(ratingMovie: String!, rating: String!): Rating
  }
`;

module.exports = typeDefs;
