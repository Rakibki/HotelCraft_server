const comments = require("../../models/comment");

const getComment = async (req, res) => {
  const roomId = req.params.roomId;
  const result = await comments.find({ roomId: new Object(roomId) });
  res.send(result);
};

module.exports = getComment;
