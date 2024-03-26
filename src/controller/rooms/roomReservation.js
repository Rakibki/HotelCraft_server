const reservations = require("../../models/reservation");

const roomReservation = async (req, res) => {
  const reservationData = req.body;
  const result = await reservations.create(reservationData);
  res.send(result);
};

module.exports = roomReservation;
