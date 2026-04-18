import React from "react";
import Dashboard from "./pages/Dashboard";
import { GameProvider } from "./context/GameContext";

export default function App() {
  return (
    <GameProvider>
      <Dashboard />
    </GameProvider>
  );
}