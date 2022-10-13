const Router = require("express");
const router = new Router();
const postContoller = require("../contorller/post.controller");

router.post("/posts", postContoller.createPosts);
router.get("/posts", postContoller.getPosts);

module.exports = router;
