// example content below from Josh

const { Schema, model } = require('mongoose');

const ratingSchema = new Schema(
  {
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User ID'
    },
    movie:{
        type: Schema.Types.ObjectId,
        ref: 'Movie ID'
    },
    score: {
      type: Number,
      required: true,
      minimum: 0,
      maximum: 5
    }
  }
);

const Rating = model('Rating', ratingSchema);

module.exports = Rating;