const mongoose = require("mongoose");

const PlanetSchema = new mongoose.Schema({
  name: String,
  size: Number,
  atmosphere: String,
  description: String,

  resources: {
    energy: { type: Number, default: 100 },
    minerals: { type: Number, default: 100 }
  },

  population: { type: Number, default: 1000 },
  civilizationLevel: { type: Number, default: 1 },

  lore: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Planet", PlanetSchema);