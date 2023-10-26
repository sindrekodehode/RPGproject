/* eslint-disable no-unused-vars */
import DungeonEl from "./DungeonEl";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import d20 from "../Images/Game/dice-d20-svgrepo-com.svg";
import { useEncounter } from "../Functions/AppContext.jsx";

export default function Mainscreen() {
  const location = useLocation();
  const chosenHero = location.state && location.state.chosenHero;
  const isMale = location.state && location.state.isMale;
  let baseDamage = `${chosenHero.dicenr}d${chosenHero.damage} + ${chosenHero.modifier}`;

  const [heroHp, setHeroHp] = useState(chosenHero.hp);
  const { encounterType, monsterType } = useEncounter(); // Access the context
  const [monsterHp, setMonsterHp] = useState(monsterType.Hp);

  return (
    <div className="main-screen">
      <div>
        {monsterType && (
          <div className="monster">
            <img src={monsterType.img} alt="" />
            <div className="current-hp">Hp: {monsterHp}</div>
            <p>{monsterType.type}</p>
            <p>AC: {monsterType.AC}</p>
            <p>Dmg: {monsterType.dmg}</p>
          </div>
        )}
      </div>
      <div>
        <DungeonEl />
        {encounterType === "monster" && <img src={d20} alt="" />}
      </div>

      {/* Hero */}
      <div>
        {chosenHero && (
          <div className="hero-small">
            <img
              src={isMale ? chosenHero.maleImage : chosenHero.femaleImage}
              alt=""
            />
            <div className="current-hp">Hp: {heroHp}</div>
            <p>Class: {chosenHero.cclass}</p>
            <p>AC: {chosenHero.AC}</p>
            <p>Dmg: {baseDamage}</p>
            {/* Display other hero attributes here */}
          </div>
        )}
      </div>
    </div>
  );
}
