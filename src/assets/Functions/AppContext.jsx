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
  const [companionArray, setCompanionArray] = useState([null, null]);
  const [minionArray, setMinionArray] = useState([null, null]);
  const [minion1Hp, setMinion1Hp] = useState(null);
  const [minion2Hp, setMinion2Hp] = useState(null);
  const [groupAttackResult, setGroupAttackResult] = useState({
    heroAttack: null,
    heroDamage: null,
    hit: false,
    victoryMessage: null,
  });
  const [encounterAttackResult, setEncounterAttackResult] = useState({
    monsterAttack: null,
    monsterDamage: null,
    hit: false,
  });
  const [elfHp, setElfHp] = useState(null);
  const [crabHp, setCrabHp] = useState(null);
  const [refreshCombat, setRefreshCombat] = useState(false);

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
    groupAttackResult,
    setGroupAttackResult,
    encounterAttackResult,
    setEncounterAttackResult,
    elfHp,
    setElfHp,
    crabHp,
    setCrabHp,
    companionArray,
    setCompanionArray,
    minionArray,
    setMinionArray,
    refreshCombat,
    setRefreshCombat,
    minion1Hp,
    setMinion1Hp,
    minion2Hp,
    setMinion2Hp,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
