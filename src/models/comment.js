const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  commentId: {
    type: String,
  },
  roomId: {
    type: String,
  },
  userId: {
    type: String,
  },
  message: {
    type: String,
  },
});

const comments = model("comments", commentSchema);

module.exports = comments;