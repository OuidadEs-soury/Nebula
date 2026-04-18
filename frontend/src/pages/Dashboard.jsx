import React, { useEffect, useState } from "react";
import axios from "axios";
import Universe from "../components/Universe";
import PlanetPanel from "../components/PlanetPanel";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetchPlanets();
  }, []);

  const fetchPlanets = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/planets");
      setPlanets(res.data);
    } catch (err) {
      console.error("Error fetching planets:", err);
    }
  };

  const createPlanet = async () => {
    const planet = {
      name: "Nova-" + Math.floor(Math.random() * 9999),
      size: Math.random() * 100,
      atmosphere: ["Oxygen", "Methane", "Carbon Dioxide", "Unknown"][
        Math.floor(Math.random() * 4)
      ],
      description: "A mysterious cosmic world"
    };

    try {
      await axios.post("http://localhost:5000/api/planets", planet);
      fetchPlanets();
    } catch (err) {
      console.error("Error creating planet:", err);
    }
  };

  return (
    <div className="dashboard-container">
      
      {/* 🌌 3D Universe */}
      <Universe planets={planets} />

      {/* 🪐 Planet Info Panel */}
      <PlanetPanel />

      {/* ➕ Create Planet Button */}
      <motion.button
        className="create-btn"
        onClick={createPlanet}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        + Create Planet
      </motion.button>

    </div>
  );
}