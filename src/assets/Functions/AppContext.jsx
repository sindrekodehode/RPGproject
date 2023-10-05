/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useEncounter = () => {
  return useContext(AppContext);
};

export const ContextProvider = ({ children }) => {
  const [encounterType, setEncounterType] = useState("");
  const [monsterType, setMonsterType] = useState(null);
  const [isMale, setIsMale] = useState(true);
  const [chosenHero, setChosenHero] = useState(null);

  const value = {
    encounterType,
    setEncounterType,
    monsterType,
    setMonsterType,
    isMale,
    setIsMale,
    chosenHero,
    setChosenHero,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
