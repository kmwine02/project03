const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 13;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    // TODO: make this a hashed value
    type: String,
    required: true,
    // may need to not require password in order to process the hash?
  },
  ratings: [
    {
      imdbID: {
        type: String,
        required: true,
        trim: true,
      },
      rating: {
        type: Number,
        min: 0,
        max: 80,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.checkPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
