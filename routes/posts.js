const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    var res = "SELECT * FROM POSTS"
    res.status(200).send(res);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/gre", async (req, res) => {
  try {
    res.status(200).send("GRE");
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/placement", async (req, res) => {
  try {
    res.status(200).send("PLACEMENT");
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
