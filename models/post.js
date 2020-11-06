const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  type: Number,
  body: String,
  title: String,
  subheading: String,
  date: Date,
  likes: Number,
  user_id: String,
});
const Post = mongoose.model("Posts", postSchema);

module.exports = {
  Player: Player,
};
