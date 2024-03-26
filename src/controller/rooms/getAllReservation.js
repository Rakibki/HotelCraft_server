const reservations = require("../../models/reservation");

const getAllReservation = async (req, res) => {
  const result = await reservations.find();
  res.send(result);
};

module.exports = getAllReservation;
