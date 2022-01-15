const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        realName: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            // TODO: make this a hashed value
            type: String,
            required: true
            // may need to not require password in order to process the hash?
        },
        ratings: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Rating'
            }
        ]
    }
);

// TODO: use bcrypt to add a hashing method internal to this call

const User = model('User', userSchema);

module.exports = User;