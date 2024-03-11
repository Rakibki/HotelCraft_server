const comments = require("../../models/comment");

const PostCommnet = async (req, res) => {
  const commentData = req.body;
  const result = await comments.create(commentData);
  res.send(result)
};

module.exports = PostCommnet;