const { User } = require("../models/user");
const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let user = await User.findOne({ _id: id });
    res.status(200).send(user);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
