const { Users, Movies, Ratings } = require("../models");

const resolvers = {
  Query: {
    ratings: async () => {
      return Ratings.find().sort({ createdAt: -1 });
    },
  },

  Mutation: {
    addRating: async (parent, { ratingMovie, rating }) => {
      return Ratings.create({ ratingMovie, rating });
    },
  },
};

module.exports = resolvers;
