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

export function StartCombat(companions, minions) {
  const {
    monsterType,
    setMonsterHp,
    monsterHp,
    chosenHero,
    heroHp,
    setHeroHp,
    setElfHp,
    setCrabHp,
    setMinion1Hp,
    minion1Hp,
    setMinion2Hp,
    minion2Hp,
    setGroupAttackResult,
    setEncounterAttackResult,
    setIsCombat,
    groupAttackResult,
    encounterAttackResult,
    elfHp,
    crabHp,
    setRefreshCombat,
  } = useEncounter();

  const monster = monsterType;
  const hero = chosenHero;
  const navigate = useNavigate();

  // Start the combat loop
  useEffect(() => {
    const party = [hero, ...(Array.isArray(companions) ? companions : [])];
    const encounter = [monster, ...(Array.isArray(minions) ? minions : [])];
    console.log("Effect is running!");

    const combatLoop = () => {
      // Hero's Turn
      console.log("Combat Loop is running!");
      for (let i = 0; i < encounter.length; i++) {
        const currentTarget = encounter[i];
        const currentTargetType = currentTarget.class;

        let targetPartyState;

        if (currentTargetType === "minion1" && minion1Hp !== undefined) {
          targetPartyState = setMinion1Hp;
        } else if (currentTargetType === "minion2" && minion2Hp !== undefined) {
          targetPartyState = setMinion2Hp;
        } else {
          targetPartyState = setMonsterHp;
        }

        const target = encounter[i];
        console.log("hero:", hero, "modifier:", hero.modifier);
        const heroAttack = calculateAttack(hero.modifier);
        console.log("heroAttack:", heroAttack);

        if (heroAttack >= target.AC) {
          const heroDamage = calculateDamage(
            hero.diceNr,
            hero.damage,
            hero.modifier
          );
          console.log("herodamage:", heroDamage);
          // Apply the damage to the target's HP
          console.log("target state:", targetPartyState);
          targetPartyState((prevHp) => {
            console.log("prevHp:", prevHp); // Log the previous HP before updating
            return prevHp - heroDamage;
          });
          setGroupAttackResult(heroAttack, heroDamage, true); // true indicates a hit
          console.log("monsterHp:", monsterHp);
        } else {
          setGroupAttackResult(heroAttack, 0, false);
        }

        // Check if the target is defeated after taking damage
        if (target.hp <= 0) {
          setGroupAttackResult(
            null,
            null,
            true,
            `${currentTarget} was defeated!`
          );
          // Remove the defeated target from the encounter
          encounter.splice(i, 1);
          i--;
          setIsCombat(false);
        }
      }

      // Monster's Turn
      for (let i = 0; i < party.length; i++) {
        const monsterTarget = party[i];
        const monsterTargetType = monsterTarget.class;
        console.log("Processing Party Target:", party[i]);
        console.log("Current Target:", monsterTargetType);
        let targetEncounterState;

        if (monsterTargetType === "elf" && elfHp !== undefined) {
          targetEncounterState = setElfHp;
        } else if (monsterTargetType === "crab" && crabHp !== undefined) {
          targetEncounterState = setCrabHp;
        } else {
          targetEncounterState = setHeroHp;
        }
        console.log("heroHp:", heroHp);
        const monsterAttack = calculateAttack(monster.modifier);
        if (monsterAttack >= monsterTarget.AC) {
          const monsterDamage = calculateDamage(
            monster.diceNr,
            monster.damage,
            monster.modifier
          );

          // Apply the damage to the target's HP
          console.log("monster target:", targetEncounterState);
          targetEncounterState((prevHp) => prevHp - monsterDamage);
          setEncounterAttackResult(monsterAttack, monsterDamage, true);
          console.log(heroHp);
        } else {
          setEncounterAttackResult(monsterAttack, 0, false);
        }

        // Check if the target is defeated after taking damage
        if (monsterTarget.hp <= 0) {
          party.splice(i, 1);
          i--;
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
        setIsCombat(false);
        return;
      }
      console.log("End of Combat Loop");
      setRefreshCombat(false);
      clearInterval(interval); // End the combat loop
    };
    setRefreshCombat(false);
    // Start the combat loop
    const interval = setInterval(combatLoop, 10000);
  }, [
    hero,
    monster,
    minions,
    companions,
    setCrabHp,
    crabHp,
    elfHp,
    heroHp,
    minion1Hp,
    minion2Hp,
    monsterHp,
    setElfHp,
    hero.damage,
    hero.diceNr,
    hero.modifier,
    setHeroHp,
    setMinion1Hp,
    setMinion2Hp,
    setIsCombat,
    monster.damage,
    monster.diceNr,
    monster.modifier,
    setMonsterHp,
    navigate,
    setEncounterAttackResult,
    setGroupAttackResult,
    setRefreshCombat,
  ]);
  return (
    <div>
      <p>Hero HP: {heroHp}</p>
      <p>Monster HP: {monsterHp}</p>
      <div className="attack-result">
        {encounterAttackResult && (
          <p>
            Hero rolls a {groupAttackResult.heroAttack} and
            {groupAttackResult.hit
              ? ` hits for ${groupAttackResult.heroDamage} damage`
              : ` misses`}
          </p>
        )}
      </div>
      <div className="attack-result">
        {encounterAttackResult && (
          <p>
            Monster rolls a {encounterAttackResult.monsterAttack} and
            {encounterAttackResult.hit
              ? ` hits for ${encounterAttackResult.monsterDamage} damage`
              : ` misses`}
          </p>
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
