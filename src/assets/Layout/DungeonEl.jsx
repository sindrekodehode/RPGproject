/* eslint-disable no-unused-vars */
import { useState } from "react";
import DungeonRoom from "../Functions/Navigate.jsx";
import dungeonData from "./Dungeon/Dungeon.jsx";
import {
  rollForEncounter,
  rollForMonster,
  getMonsterByType,
  setIsCombat,
} from "../Functions/Encounter.jsx";
import { useEncounter } from "../Functions/AppContext.jsx";

function DungeonEl() {
  const [currentRoom, setCurrentRoom] = useState(dungeonData[0]);
  const { setEncounterType, setMonsterType } = useEncounter();

  const navigateToRoom = (roomNumber) => {
    const nextRoom = dungeonData.find((room) => room.roomNr === roomNumber);
    if (nextRoom) {
      // Check for encounters and monsters here
      const newEncounterType = rollForEncounter();
      setEncounterType(newEncounterType); // Set encounter type using the context
      if (newEncounterType === "monster") {
        console.log("monster encountered");
        setIsCombat(true);
        const newMonsterType = rollForMonster();
        const chosenMonster = getMonsterByType(newMonsterType.type); // Get the chosen monster object

        setMonsterType(chosenMonster); // Set monster type using the context
      } else if (newEncounterType === "treasure") {
        console.log("treasure found");
      } else {
        console.log("found nothing");
      }
      setCurrentRoom(nextRoom);
    }
  };

  return (
    <div>
      <DungeonRoom room={currentRoom} navigateToRoom={navigateToRoom} />
    </div>
  );
}

export default DungeonEl;
