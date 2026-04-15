const mongoose = require("mongoose");

const PlanetSchema = new mongoose.Schema({
  name: String,
  size: Number,
  atmosphere: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Planet", PlanetSchema);