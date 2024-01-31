const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

