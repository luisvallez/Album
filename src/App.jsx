import React from "react";
import Hero from "./components/Hero";
import "./App.css"; // Asegúrate que este archivo exista

function App() {
  return (
    <div className="App">
      <Hero />
      {/* Aquí puedes añadir más secciones como "Acerca de", "Letra", "Video", etc. */}
    </div>
  );
}

export default App;
