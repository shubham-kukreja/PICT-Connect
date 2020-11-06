const express = require("express");
const { Company } = require("../models/company");
const router = express.Router();

router.post("/new", async (req, res) => {
  try {
    const company = new Company(req.body);
    const temp = await company.save();
    res.status(200).send(temp);
  } catch (error) {
    console.log("Failed");
    res.status(res.status).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const company = Company.findById(id);
    if (!company) res.status(404).send({ message: "Not Found." });
    let temp = await company.deleteOne();
    res.status(200).send(temp);
  } catch (error) {
    console.log("Failed");
    res.send(error.message);
  }
});

module.exports = router;
