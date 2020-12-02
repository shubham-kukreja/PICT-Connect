const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: String,
  city: String,
  cutoff: Number,
  criteria: String,
  total_selected: Number,
  visit_date: Date,
  ctc: Number,
});

const Company = mongoose.model("Companies", companySchema);

module.exports = {
  Company: Company,
};
