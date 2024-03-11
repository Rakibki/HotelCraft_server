const express = require("express");
const PostCommnet = require("../../controller/comment/PostComment");

const router = express.Router();

router.post("/api/v1/comment", PostCommnet);

module.exports = router;
