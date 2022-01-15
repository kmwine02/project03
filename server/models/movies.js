const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    imdbID: {
      type: String,
      required: true,
      trim: true
    },
    image: {
      type: String,
      required: true,
      trim: true
    }
  }
);

// TODO: method internally to get IMDB ID and image?
// (call API in filling out DB, to simulate making the call upon saving a movie)

const Movie = model('Movie', movieSchema);

module.exports = Movie;