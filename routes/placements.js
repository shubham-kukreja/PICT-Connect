const express = require("express");
const { Placement } = require("../models/placement");
const router = express.Router();
const { isAdmin } = require("../middlewares/auth");

router.post("/new", async (req, res) => {
  try {
    const placement = new Placement(req.body);
    const temp = await placement.save();
    res.status(200).send(temp);
  } catch (error) {
    console.log("Failed");

    res.send(error.message);
  }
});

router.put("/edit/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const placement = Placement.findById(id);
    if (!placement) res.status(404).send({ message: "Placement Not Found." });
    let temp = await placement.updateOne(req.body);
    res.status(200).send(temp);
  } catch (error) {
    console.log("Failed");
    res.send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const placement = Placement.findById(id);
    if (!placement) res.status(404).send({ message: "Not Found." });
    let temp = await placement.deleteOne();
    res.status(200).send(temp);
  } catch (error) {
    console.log("Failed");
    res.send(error.message);
  }
});

module.exports = router;
