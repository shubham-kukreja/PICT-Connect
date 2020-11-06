const mongoose = require("mongoose");

const greSchema = new mongoose.Schema({
  quant_score: Number,
  verbal_score: Number,
  analytical_score: Number,
  university: String,
  date_of_exam: Date,
});

const Gre = mongoose.model("GRE", greSchema);

module.exports = {
  Player: Player,
};
