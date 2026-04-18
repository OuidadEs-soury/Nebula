import React, { createContext, useState } from "react";

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <GameContext.Provider value={{ selectedPlanet, setSelectedPlanet }}>
      {children}
    </GameContext.Provider>
  );
}