const rooms = require("../../models/room");

const getAllRooms = async (req, res) => {
  const result = await rooms.find();
  res.send(result);
};

module.exports = getAllRooms;
