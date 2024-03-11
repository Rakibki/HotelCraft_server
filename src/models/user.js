const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userId: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  },
  role: {
    type: String,
  },
});

const users = model("users", userSchema);

module.exports = users;
