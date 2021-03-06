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
        return Users.findOne({ _id: context.user._id });
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

    addRating: async (parent, { imdbID, score, ID, title, image }) => {
      try {
        let updateUser;
        const userRating = await Users.findOne({
          _id: ID,
        });

        // console.log(userRating);
        const priorRating = userRating.ratings.find(
          (movie) => movie.imdbID === imdbID
        );
        console.log(priorRating);
        if (priorRating) {
          updateUser = await Users.update(
            {
              _id: ID,
              "ratings.imdbID": imdbID,
            },
            {
              $set: {
                "ratings.$.score": score,
              },
            }
          );
        } else {
          updateUser = await Users.findOneAndUpdate(
            { _id: ID },
            { $addToSet: { ratings: { imdbID, score, title, image } } },
            { new: true, runValidators: true }
          );
        }
        return updateUser;
      } catch (err) {
        console.log(err);
      }
      throw new AuthenticationError("Error in addRating...");
    },
    addMovie: async (parent, { imdbID, image, name }) => {
      try {
        const alreadyRated = await Movies.find({ imdbID });
        if (alreadyRated) {
          return alreadyRated;
        }
        const newMovie = await Movies.create({
          imdbID,
          name,
          image,
        });
        return newMovie;
      } catch (err) {
        console.log(err);
      }
    },
  },
};

module.exports = resolvers;
