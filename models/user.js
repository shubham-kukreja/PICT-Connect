const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  res_id: String,
  email: String,
  password: String,
  display_name: String,
  department: String,
  graduation_year: Number,
  linkedin_url: String,
  github_url: String,
  role: String,
});

const Users = mongoose.model("Users", userSchema);

module.exports = {
  Users: Users,
};
