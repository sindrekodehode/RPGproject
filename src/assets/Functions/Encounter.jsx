import { monsterTable } from "../Tables/MonsterTable";
import Monsters from "../Entities/Monsters";

function rollForEncounter() {
  const random100 = Math.random() * 100;

  if (random100 <= 55) {
    return "empty";
  } else if (random100 <= 90) {
    return "monster";
  } else {
    return "treasure";
  }
}

function getMonsterByType(monsterType) {
  const foundMonster = Monsters.find((monster) => monster.type === monsterType);

  if (foundMonster) {
    return foundMonster;
  } else {
    return { type: "Monster" }; // Default if not found
  }
}

function rollForMonster() {
  const totalChance = monsterTable.reduce(
    (sum, entry) => sum + entry.chance,
    0
  );
  const roll = Math.random() * totalChance;

  let accumulatedChance = 0;
  for (const entry of monsterTable) {
    accumulatedChance += entry.chance;
    if (roll < accumulatedChance) {
      const monsterType = entry.type;
      // Find the monster object in the Monsters array based on the type
      const chosenMonster = Monsters.find(
        (monster) => monster.type === monsterType
      );
      if (chosenMonster) {
        // Return the chosen monster object
        return chosenMonster;
      }
    }
  }

  // Default to a generic monster if something goes wrong
  console.log("Something Goofed");
  return { type: "Monster" };
}

export { rollForEncounter, rollForMonster, getMonsterByType };
