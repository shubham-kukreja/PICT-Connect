const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.user.email });
    if (!user)
      return res.json({
        error: true,
        message: "Invalid Email ID",
      });
    const validatePassword = await bcrypt.compare(
      req.body.user.password,
      user.password
    );
    if (!validatePassword)
      return res.json({
        error: true,
        message: "Invalid Password",
      });
    const token = jwt.sign(
      {
        _id: user._id,
        display_name: user.display_name,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY
    );
    res.status(200).json({ error: false, token: token });
  } catch (err) {
    res.json({
      error: true,
      message: "Error while logging in, Try Again Later.",
    });
  }
});

router.post("/register", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.user.email });
    console.log(user);
    if (user)
      return res
        .status(400)
        .json({ error: true, message: "User Already Registered" });
    user = new User({
      res_id: req.body.user.res_id,
      email: req.body.user.email,
      display_name: req.body.user.display_name,
      department: req.body.user.department,
      graduation_year: req.body.user.graduation_year,
      linkedin_url: req.body.user.linkedin_url,
      github_url: req.body.user.github_url,
      role: parseInt(0),
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.user.password, salt);
    await user.save();
    res.status(200).json({
      error: false,
      message: "User Registered Successfully",
    });
  } catch (err) {
    res.json({
      error: true,
      message: "Error while creating New User, Try Again Later.",
    });
  }
});

module.exports = router;
