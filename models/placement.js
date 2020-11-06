const mongoose = require("mongoose");

const placementSchema = new mongoose.Schema({
  role: String,
  offCampus: Number,
  company: Number,
});
const Placement = mongoose.model("Placements", placementSchema);

module.exports = {
  Placement: Placement,
};
