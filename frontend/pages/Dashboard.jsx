import React, { useEffect, useState } from "react";
import axios from "axios";
import Universe from "../components/Universe";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetchPlanets();
  }, []);

  const fetchPlanets = async () => {
    const res = await axios.get("http://localhost:5000/api/planets");
    setPlanets(res.data);
  };

  const createPlanet = async () => {
    const planet = {
      name: "Nova-" + Math.floor(Math.random() * 9999),
      size: Math.random() * 100,
      atmosphere: "Unknown",
      description: "A glowing cosmic entity"
    };

    await axios.post("http://localhost:5000/api/planets", planet);
    fetchPlanets();
  };

  return (
    <div>
      <Universe planets={planets} />

      <motion.button
        className="create-btn"
        onClick={createPlanet}
        whileHover={{ scale: 1.2 }}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 10
        }}
      >
        + Create Planet
      </motion.button>
    </div>
  );
}