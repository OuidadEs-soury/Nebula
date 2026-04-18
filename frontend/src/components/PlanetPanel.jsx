import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import axios from "axios";

export default function PlanetPanel() {
  const { selectedPlanet, setSelectedPlanet } = useContext(GameContext);

  if (!selectedPlanet) return null;

  const evolve = async () => {
    const res = await axios.post(
      `http://localhost:5000/api/planets/evolve/${selectedPlanet._id}`
    );

    setSelectedPlanet(res.data);
  };

  return (
    <div className="panel">
      <h2>{selectedPlanet.name}</h2>
      <p>{selectedPlanet.lore}</p>

      <p>Population: {selectedPlanet.population}</p>
      <p>Energy: {selectedPlanet.resources.energy}</p>
      <p>Minerals: {selectedPlanet.resources.minerals}</p>
      <p>Level: {selectedPlanet.civilizationLevel}</p>

      <button onClick={evolve}>Evolve Civilization</button>

      <button onClick={() => setSelectedPlanet(null)}>Close</button>
    </div>
  );
}