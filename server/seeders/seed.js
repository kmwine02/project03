const db = require("../config/connection");
const { Ratings, Users, Movies } = require("../models");
const ratingSeeds = require("./ratingSeeds.json");
const userSeeds = require("./userSeeds.json");
const movieSeeds = require("./movieSeeds.json");

db.once("open", async () => {
  await Users.deleteMany({});
  await Users.create(userSeeds);

  await Ratings.deleteMany({});
  await Ratings.create(ratingSeeds);

  await Movies.deleteMany({});
  await Movies.create(movieSeeds);

  console.log("all done!");
  process.exit(0);
});
