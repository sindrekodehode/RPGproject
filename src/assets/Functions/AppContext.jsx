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
  const [isCombat, setIsCombat] = useState(false);
  const [heroHp, setHeroHp] = useState(null);
  const [monsterHp, setMonsterHp] = useState(null);
  const [heroFirst, setHeroFirst] = useState(true);

  const value = {
    encounterType,
    setEncounterType,
    monsterType,
    setMonsterType,
    isMale,
    setIsMale,
    chosenHero,
    setChosenHero,
    isCombat,
    setIsCombat,
    heroHp,
    setHeroHp,
    monsterHp,
    setMonsterHp,
    heroFirst,
    setHeroFirst,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
