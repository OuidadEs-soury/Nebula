import React from "react";
import { motion } from "framer-motion";

export default function PlanetCard({ planet }) {
  return (
    <motion.div
      className="planet-card"
      whileHover={{ scale: 1.05 }}
    >
      <h2>{planet.name}</h2>
      <p>Size: {planet.size.toFixed(2)}</p>
      <p>Atmosphere: {planet.atmosphere}</p>
      <p>{planet.description}</p>
    </motion.div>
  );
}