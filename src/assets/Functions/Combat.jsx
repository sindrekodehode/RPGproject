// import { useContext, useState } from "react";
import { useEncounter } from "../Functions/AppContext.jsx";

function calculateAttack(modifier) {
  const roll = Math.floor(Math.random * 20) + 1;
  return roll + modifier;
}

function calculateDamage(diceNr, damage, modifier) {
  let fullDamage = 0;
  for (let i = 0; i < diceNr; i++) {
    const roll = Math.floor(Math.random * damage) + 1;
    fullDamage += roll;
  }
  return fullDamage + modifier;
}

function StartCombat(hero, companions, monster, minions) {
  const {
    monsterHp,
    setMonsterHp,
    heroHp,
    setHeroHp,
    minion1Hp,
    setMinion1Hp,
    minion2Hp,
    setMinion2Hp,
  } = useEncounter();
  const party = [hero, ...companions];
  const encounter = [monster, ...minions];
  // Start the combat loop
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

      const target = encounter[Math.floor(Math.random() * encounter.length)];
      const heroAttack = calculateAttack(hero.modifier);

      if (heroAttack >= currentTarget.AC) {
        const heroDamage = calculateDamage(
          hero.diceNr,
          hero.damage,
          hero.modifier
        );

        // Apply the damage to the target's HP
        targetState((prevHp) => prevHp - heroDamage);
        displayHeroAttackResult(heroAttack, heroDamage);
      } else {
        displayHeroMiss();
      }

      // Check if the target is defeated after taking damage
      if (target.hp <= 0) {
        // Remove the defeated target from the encounter
        encounter.splice(i, 1);
        i--; // Adjust the index to stay in the same position
      }
      // Introduce a delay here

      // Monster's Turn

      for (let i = 0; i < party.length; i++) {
        const monsterTarget = party[i];
        const monsterTargetType = currentTarget.class;
        let targetState;

        if (monsterTargetType === "hero") {
          targetState = heroHp;
        } else if (monsterTargetType === "elf") {
          targetState = elfHp;
        } else {
          targetState = crabHp;
        }
        const monsterAttack = calculateAttack(monster.modifier);
        if (monsterAttack >= monsterTarget.AC) {
          const monsterDamage = calculateDamage(
            monster.diceNr,
            monster.damage,
            monster.modifier
          );
          targetState((prevHp) => prevHp - heroDamage);
          displayMonsterAttackResult(monsterAttack, monsterDamage);
        } else {
          displayMonsterMiss();
        }

        // Check if the target is defeated after taking damage
        if (target.hp <= 0) {
          // Remove the defeated target from the encounter
          party.splice(i, 1);
          i--; // Adjust the index to stay in the same position
        }

        // Check if the hero is defeated
        if (heroHp <= 0) {
          displayDefeatMessage();
          clearInterval(combatLoop); // End the combat loop
          return;
        }
      }
    }
  };
}
