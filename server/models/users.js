const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 13;

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        username: {
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
                imdbID: {
                    type: String,
                    required: true,
                    trim: true
                },
                rating: {
                    type: Number,
                    min: 0,
                    max: 80
                }
            }
        ]
    }
);

// pre() call "adapted" from <https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1>

userSchema.pre('save', function(next) {
    let user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        })
    })
});

userSchema.methods.checkPassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = model('User', userSchema);

module.exports = User;