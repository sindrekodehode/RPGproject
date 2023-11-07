/* eslint-disable no-unused-vars */
import { useState } from "react";
import DungeonRoom from "../Functions/Navigate.jsx";
import dungeonData from "./Dungeon/Dungeon.jsx";
import {
  rollForEncounter,
  rollForMonster,
  getMonsterByType,
} from "../Functions/Encounter.jsx";
import { useEncounter } from "../Functions/AppContext.jsx";

function DungeonEl() {
  const [currentRoom, setCurrentRoom] = useState(dungeonData[0]);
  const {
    setEncounterType,
    setMonsterType,
    setIsCombat,
    isCombat,
    setMonsterHp,
  } = useEncounter();

  const navigateToRoom = (roomNumber) => {
    const nextRoom = dungeonData.find((room) => room.roomNr === roomNumber);
    if (nextRoom) {
      // Check for encounters and monsters here
      const newEncounterType = rollForEncounter();
      setEncounterType(newEncounterType); // Set encounter type using the context
      if (newEncounterType === "monster") {
        console.log("monster encountered");
        const newMonsterType = rollForMonster();
        const chosenMonster = getMonsterByType(newMonsterType.type); // Get the chosen monster object

        setIsCombat(true);

        setMonsterType(chosenMonster); // Set monster type using the context
        setMonsterHp(chosenMonster.Hp);
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
      <DungeonRoom
        room={currentRoom}
        navigateToRoom={navigateToRoom}
        isCombat={isCombat}
      />
    </div>
  );
}

export default DungeonEl;
