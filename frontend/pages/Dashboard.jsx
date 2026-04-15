import React, { useEffect, useState } from "react";
import axios from "axios";
import PlanetCard from "../components/PlanetCard";
import GalaxyCanvas from "../components/GalaxyCanvas";
import { motion } from "framer-motion";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Dashboard() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetchPlanets();

    socket.on("planetCreated", (planet) => {
      setPlanets((prev) => [...prev, planet]);
    });
  }, []);

  const fetchPlanets = async () => {
    const res = await axios.get("http://localhost:5000/api/planets");
    setPlanets(res.data);
  };

  const createPlanet = async () => {
    const planet = {
      name: "X-" + Math.floor(Math.random() * 1000),
      size: Math.random() * 100,
      atmosphere: "Methane",
      description: "A mysterious world..."
    };

    const res = await axios.post("http://localhost:5000/api/planets", planet);
    socket.emit("newPlanet", res.data);
  };

  return (
    <div className="dashboard">
      <GalaxyCanvas />

      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={createPlanet}
        className="create-btn"
      >
        Create Planet
      </motion.button>

      <div className="grid">
        {planets.map((p) => (
          <PlanetCard key={p._id} planet={p} />
        ))}
      </div>
    </div>
  );
}