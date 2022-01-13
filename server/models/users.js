const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
        },
        ratings: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Rating'
            }
        ]
    }
);

const User = model('User', userSchema);

module.exports = User;