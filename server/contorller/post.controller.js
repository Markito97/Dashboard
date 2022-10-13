const Post = require("../schema/Post");

class PostContoller {
  async createPosts(req, res) {
    try {
      const { author, title, content, picture } = req.body;
      const post = await Post.create({ author, title, content, picture });
      res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getPosts(req, res) {
    try {
      const post = await Post.find();
      return res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = new PostContoller();
