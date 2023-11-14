// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./assets/Functions/AppContext.jsx";
import Landing from "./assets/Layout/Landing.jsx";
import HeroSelector from "./assets/Layout/HeroSelector.jsx";
import Mainscreen from "./assets/Layout/Mainscreen.jsx";
import Defeat from "./assets/Layout/Defeat.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/heroselector" element={<HeroSelector />} />
          <Route path="/mainscreen" element={<Mainscreen />} />
          <Route path="/defeat" element={<Defeat />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
