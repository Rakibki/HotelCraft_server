const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  role: {
    type: String,
  },
});

const users = model("users", userSchema);

module.exports = users;
