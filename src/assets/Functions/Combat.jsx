// import { useContext, useState } from "react";
import { useEncounter } from "../Functions/AppContext.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function calculateAttack(modifier) {
  const roll = Math.floor(Math.random() * 20) + 1;
  return roll + modifier;
}

function calculateDamage(diceNr, damage, modifier) {
  let fullDamage = 0;
  for (let i = 0; i < diceNr; i++) {
    const roll = Math.floor(Math.random() * damage) + 1;
    fullDamage += roll;
  }
  return fullDamage + modifier;
}

export function StartCombat(hero, companions, monster, minions) {
  const {
    monsterHp,
    heroHp,
    minion1Hp,
    minion2Hp,
    setGroupAttackResult,
    setEncounterAttackResult,
    groupAttackResult,
    encounterAttackResult,
    elfHp,
    crabHp,
  } = useEncounter();

  const navigate = useNavigate();

  // Start the combat loop
  useEffect(() => {
    const party = [hero, ...companions];
    const encounter = [monster, ...minions];
    const combatLoop = () => {
      // Hero's Turn
      for (let i = 0; i < encounter.length; i++) {
        const currentTarget = encounter[i];
        const currentTargetType = currentTarget.class;
        let targetState;

        if (currentTargetType === "monster") {
          targetState = monsterHp;
        } else if (currentTargetType === "minion1") {
          targetState = minion1Hp;
        } else {
          targetState = minion2Hp;
        }

        const target = encounter[i]; // Use the current target without re-randomizing
        const heroAttack = calculateAttack(hero.modifier);

        if (heroAttack >= target.AC) {
          const heroDamage = calculateDamage(
            hero.diceNr,
            hero.damage,
            hero.modifier
          );

          // Apply the damage to the target's HP
          targetState((prevHp) => prevHp - heroDamage);
          setGroupAttackResult(heroAttack, heroDamage, true); // true indicates a hit
        } else {
          setGroupAttackResult(heroAttack, 0, false); // 0 indicates no damage, false indicates a miss
        }

        // Check if the target is defeated after taking damage
        if (target.hp <= 0) {
          setGroupAttackResult(null, null, true, `${target} was defeated!`);
          // Remove the defeated target from the encounter
          encounter.splice(i, 1);
          i--; // Adjust the index to stay in the same position
        }
      }

      // Introduce a delay here

      // Monster's Turn
      for (let i = 0; i < party.length; i++) {
        const monsterTarget = party[i];
        const monsterTargetType = monsterTarget.class;
        let targetState;

        if (monsterTargetType === "hero") {
          targetState = heroHp;
        } else if (monsterTargetType === "elf") {
          targetState = elfHp; // You might need to change this based on your setup
        } else {
          targetState = crabHp; // You might need to change this based on your setup
        }

        const monsterAttack = calculateAttack(monster.modifier);
        if (monsterAttack >= monsterTarget.AC) {
          const monsterDamage = calculateDamage(
            monster.diceNr,
            monster.damage,
            monster.modifier
          );

          // Apply the damage to the target's HP
          targetState((prevHp) => prevHp - monsterDamage);
          setEncounterAttackResult(monsterAttack, monsterDamage, true); // true indicates a hit
        } else {
          setEncounterAttackResult(monsterAttack, 0, false); // 0 indicates no damage, false indicates a miss
        }

        // Check if the target is defeated after taking damage
        if (monsterTarget.hp <= 0) {
          // Remove the defeated target from the party
          party.splice(i, 1);
          i--; // Adjust the index to stay in the same position
        }

        // Check if the hero is defeated
        if (heroHp <= 0) {
          navigate("/defeat");
          clearInterval(interval); // End the combat loop
          return;
        }
      }

      // Check if all monsters or minions are defeated
      if (encounter.every((target) => target.hp <= 0)) {
        setGroupAttackResult(null, null, true, `Encounter was defeated!`);
        clearInterval(interval); // End the combat loop
        return;
      }

      // Check if all heroes or companions are defeated
      if (party.every((target) => target.hp <= 0)) {
        navigate("/defeat");
        clearInterval(interval); // End the combat loop
        return;
      }
    };

    // Start the combat loop
    const interval = setInterval(combatLoop, 1000); // Adjust the delay as needed
  }, [
    hero,
    monster,
    minions,
    companions,
    crabHp,
    elfHp,
    hero.damage,
    hero.diceNr,
    hero.modifier,
    heroHp,
    minion1Hp,
    minion2Hp,
    monster.damage,
    monster.diceNr,
    monster.modifier,
    monsterHp,
    navigate,
    setEncounterAttackResult,
    setGroupAttackResult,
  ]);
  return (
    <div>
      <p>Hero HP: {heroHp}</p>
      <p>Monster HP: {monsterHp}</p>
      <div className="attack-result">
        {groupAttackResult && <p>Hero Attack Result: {groupAttackResult}</p>}
      </div>
      <div className="attack-result">
        {encounterAttackResult && (
          <p>Monster Attack Result: {encounterAttackResult}</p>
        )}
      </div>
      {groupAttackResult && groupAttackResult.victoryMessage && (
        <div className="victory-message">
          <p>{groupAttackResult.victoryMessage}</p>
        </div>
      )}
    </div>
  );
}
