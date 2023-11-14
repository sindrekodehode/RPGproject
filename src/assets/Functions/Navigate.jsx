/* eslint-disable react/prop-types */
import d20 from "../Images/Game/dice-d20-svgrepo-com.svg";
import { StartCombat } from "./Combat";
import { useState } from "react";

function DungeonRoom({
  room,
  navigateToRoom,
  isCombat,
  // groupAttackResult,
  // encounterAttackResult,
  // monsterType,
  chosenHero,
  minionArray,
  companionArray,
}) {
  const [refreshCombat, setRefreshCombat] = useState(false);

  const handleD20Click = () => {
    // Set refreshCombat to true to trigger a re-render of CombatComponent
    setRefreshCombat(true);
  };

  return (
    <div className="dungeon-room-container">
      <img
        src={room.image}
        alt={`Room ${room.roomNr}`}
        className="dungeon-img"
      />

      {isCombat ? (
        <div className="diceContainer">
          <div className="dice-content">
            <p>Attack!</p>
            <img className="d20" src={d20} onClick={handleD20Click} alt="" />
          </div>
        </div>
      ) : (
        <div className="direction-buttons">
          <p>{room.text}</p>
          {room.directions.map((direction, index) => (
            <button
              key={index}
              onClick={() => navigateToRoom(room.exitTo[index])}
            >
              {direction}
            </button>
          ))}
        </div>
      )}

      {/* {isCombat && groupAttackResult && (
        <div className="attack-result">
          <p>Hero Attack Result: {groupAttackResult}</p>
          {groupAttackResult === "Miss" && <p>Hero misses the attack!</p>}
        </div>
      )}

      {isCombat && encounterAttackResult && (
        <div className="attack-result">
          <p>Monster Attack Result: {encounterAttackResult}</p>
          {encounterAttackResult === "Miss" && (
            <p>Monster misses the attack!</p>
          )}
        </div>
      )} */}

      {isCombat && refreshCombat && (
        <StartCombat
          // key={refreshCombat}
          // refreshCombat={setRefreshCombat}
          hero={chosenHero}
          companions={companionArray}
          minions={minionArray}
        />
      )}
    </div>
  );
}

export default DungeonRoom;
