const express = require("express");
const router = express.Router();
const Planet = require("../models/Planet");
const generateLore = require("../utils/generateLore");

router.post("/", async (req, res) => {
  const lore = generateLore(req.body.name);

  const planet = new Planet({
    ...req.body,
    lore
  });

  await planet.save();
  res.json(planet);
});

router.post("/evolve/:id", async (req, res) => {
  const planet = await Planet.findById(req.params.id);

  planet.population += Math.floor(Math.random() * 500);
  planet.resources.energy += 10;
  planet.resources.minerals += 5;
  planet.civilizationLevel += 1;

  await planet.save();

  res.json(planet);
});

module.exports = router;