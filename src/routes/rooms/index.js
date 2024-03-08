const getAllRooms = require("../../middlewares/rooms/getAllRooms");

const router = express.Router();

router.get("/api/v1/rooms", getAllRooms);

module.exports = router;
