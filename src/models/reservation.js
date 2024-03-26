const { Schema, model } = require("mongoose");

const reservationSchema = new Schema({
  roomId: {
    type: String,
  },
  userId: {
    type: String,
  },
  data: {
    type: String,
  },
  checkInDate: {
    type: String,
  },
  CheckOutDate: {
    type: String,
  },
  roomStatus: {
    type: String,
  },
  Adults: {
    type: Number,
  },
  Children: {
    type: Number,
  },
});

const reservations = model("reservations", reservationSchema);

module.exports = reservations;
