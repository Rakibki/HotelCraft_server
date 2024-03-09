const express = require("express");
const createUser = require("../../controller/authentication/createUser");
const router = express.Router();

router.post("/api/v1/users", createUser);

module.exports = router;
