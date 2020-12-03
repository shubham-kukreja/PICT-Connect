const express = require("express");
const { route } = require("./posts");
const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).send("PICT ===== JAIL");
});

module.exports = router;
