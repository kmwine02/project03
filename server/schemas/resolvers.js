const { Users, Movies, Ratings } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return Users.findOne({ username }).populate("ratings").populate("movies");
    },
    ratings: async () => {
      return Ratings.find().sort({ createdAt: -1 });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return Users.findOne({ _id: context.user._id }).populate("ratings");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await Users.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await Users.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No user found with this username");
      }

      const correctPw = await user.checkPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addRating: async (parent, { ratingMovie, rating }) => {
      return Ratings.create({ ratingMovie, rating });
    },
  },
};

module.exports = resolvers;
