const express = require("express");
const PostCommnet = require("../../controller/comment/PostComment");
const getComment = require("../../controller/comment/getComment");

const router = express.Router();

router.post("/api/v1/comment", PostCommnet);
router.get("/api/v1/comments/:roomId", getComment);

module.exports = router;
