const express = require("express");
const { getPosts, PostsData } = require("../controllers/posts");

const router = express.Router();

router.get("/", getPosts);
router.post("/", PostsData);

module.exports = router;
