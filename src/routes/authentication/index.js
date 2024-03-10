const express = require("express");
const createUser = require("../../controller/authentication/createUser");
const getAlluser = require("../../controller/authentication/getAllUser");
const createToken = require("../../utils/createToken");
const router = express.Router();

router.post("/api/v1/users", createUser);
router.get("/api/v1/users", getAlluser);
router.post("/api/v1/createToken", createToken);

module.exports = router;
