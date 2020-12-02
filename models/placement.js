const mongoose = require("mongoose");

const placementSchema = new mongoose.Schema({
  role: String,
  offCampus: Number,
  company: mongoose.Schema.Types.ObjectId,
});
const Placement = mongoose.model("Placements", placementSchema);

module.exports = {
  Placement: Placement,
};
