const { Schema, model } = require("mongoose");

const roomSchema = new Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  price: {
    type: String,
  },
  guests: {
    type: Number,
  },
  Size: {
    type: String,
  },
  bedrooms: {
    type: String,
  },
  category: {
    type: String,
  },
  bathrooms: {
    type: String,
  },
  description: {
    type: String,
  },
  images: {
    type: Array,
  },
  facility: {
    type: Array,
  },
  host: {
    type: Object,
  },
});

const rooms = model("rooms", roomSchema);

module.exports = rooms;
