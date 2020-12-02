const express = require("express");
const { Post } = require("../models/post");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/postdetails/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id);
    res.status(200).send(post);
  } catch (error) {
    res.send(error.message);
  }
});

router.post("/new", async (req, res) => {
  try {
    const post = new Post(req.body);
    const temp = await post.save();
    res.status(200).send(temp);
  } catch (error) {
    console.log("Failed");
    res.status(res.status).send(error.message);
  }
});

router.put("/like/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = Post.findById(id);
    if (!post) res.status(404).send({ message: "Post Not Found." });
    let temp = await post.updateOne({ $inc: { likes: 1 } });
    res.status(200).send(temp);
  } catch (error) {
    console.log("Failed");
    res.send(error.message);
  }
});

router.put("/edit/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = Post.findById(id);
    if (!post) res.status(404).send({ message: "Post Not Found." });
    let temp = await post.updateOne(req.body);
    res.status(200).send(temp);
  } catch (error) {
    console.log("Failed");
    res.send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = Post.findById(id);
    if (!post) res.status(404).send({ message: "Post Not Found." });
    let temp = await post.deleteOne();
    res.status(200).send(temp);
  } catch (error) {
    console.log("Failed");
    res.send(error.message);
  }
});

module.exports = router;
