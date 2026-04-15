const express = require("express");
const router = express.Router();
const Planet = require("../models/Planet");

router.get("/", async (req, res) => {
  const planets = await Planet.find();
  res.json(planets);
});

router.post("/", async (req, res) => {
  const planet = new Planet(req.body);
  await planet.save();
  res.json(planet);
});

module.exports = router;