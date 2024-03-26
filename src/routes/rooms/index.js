const express = require("express");
const getAllRooms = require("../../controller/rooms/getAllRooms");
const getSingleRoom = require("../../controller/rooms/getSingleRoom");
const roomReservation = require("../../controller/rooms/roomReservation");
const getAllReservation = require("../../controller/rooms/getAllReservation");

const router = express.Router();

router.get("/api/v1/rooms", getAllRooms);
router.get("/api/v1/room/:id", getSingleRoom);
router.post("/api/v1/room/reservation", roomReservation);
router.get("/api/v1/room/reservation/all", getAllReservation);


module.exports = router;