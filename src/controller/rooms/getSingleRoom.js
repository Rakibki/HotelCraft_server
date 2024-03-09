const { ObjectId } = require("mongodb");
const rooms = require("../../models/room");

const getSingleRoom = async (req, res) => {
  const roomId = req.params?.id;
  const result = await rooms.findOne({ _id: new ObjectId(roomId) });
  res.send(result);
};

module.exports = getSingleRoom;
