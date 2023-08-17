const express = require("express");
const { getPosts, PostsData, deletePost } = require("../controllers/posts");

const router = express.Router();

router.get("/", getPosts);
router.post("/", PostsData);
router.delete("/:id",deletePost)

module.exports = router;
