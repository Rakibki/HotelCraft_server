const express = require("express");
const getAllRooms = require("../../controller/rooms/getAllRooms");
const getSingleRoom = require("../../controller/rooms/getSingleRoom");

const router = express.Router();

router.get("/api/v1/rooms", getAllRooms);
router.get("/api/v1/room/:id", getSingleRoom);

module.exports = router;
