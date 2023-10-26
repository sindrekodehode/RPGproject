import { useContext, useState } from "react";
import { useEncounter } from "../Functions/AppContext.jsx";

function initiative(monsterInit, heroInit) {
  const roll = Math.floor(Math.random * 20) + 1;
  if (monsterInit + roll > heroInit + roll) {
    setHeroFirst(false);
  }
}

function calculateAttack(modifier) {
  const roll = Math.floor(Math.random * 20) + 1;
  return roll + modifier;
}

function calculateDamage(diceNr, damage, modifier) {
  const roll = Math.floor(Math.random * damage) + 1;
  for (let i = 0; i < diceNr; i++) {}
}

function startCombat(hero, monster) {
  const { monsterHp, setMonsterHp, heroHp, setHeroHp } = useEncounter();
  // Determine initiative (hero or monster goes first)

  // Start the combat loop
  const combatLoop = setInterval(() => {
    // Hero's Turn
    const heroAttack = calculateAttack(hero.modifier);
    if (heroAttack >= monster.AC) {
      const heroDamage = calculateDamage(
        hero.diceNr,
        hero.damage,
        hero.modifier
      );
      setMonsterHp(monsterHp - heroDamage);
      displayHeroAttackResult(heroAttack, heroDamage);
    } else {
      displayHeroMiss();
    }

    // Check if the monster is defeated
    if (monsterHP <= 0) {
      displayVictoryMessage();
      clearInterval(combatLoop); // End the combat loop
      return;
    }

    // Introduce a delay here

    // Monster's Turn
    const monsterAttack = calculateAttack(monster.modifier);
    if (monsterAttack >= hero.AC) {
      const monsterDamage = calculateDamage(
        monster.diceNr,
        monster.damage,
        monster.modifier
      );
      setHeroHp(heroHp - monsterDamage);
      displayMonsterAttackResult(monsterAttack, monsterDamage);
    } else {
      displayMonsterMiss();
    }

    // Check if the hero is defeated
    if (heroHP <= 0) {
      displayDefeatMessage();
      clearInterval(combatLoop); // End the combat loop
      return;
    }
  }, 1000); // Adjust the delay as needed
}
