/* eslint-disable react/prop-types */
import d20 from "../Images/Game/dice-d20-svgrepo-com.svg";
import { StartCombat } from "./Combat";

function DungeonRoom({
  room,
  navigateToRoom,
  isCombat,
  groupAttackResult,
  encounterAttackResult,
  monsterType,
  chosenHero,
  minionArray,
  companionArray,
}) {
  const handleAttackClick = () => {
    StartCombat(chosenHero, companionArray, monsterType, minionArray);
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
            <img className="d20" src={d20} onClick={handleAttackClick} alt="" />
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

      {isCombat && groupAttackResult && (
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
      )}

      {isCombat && groupAttackResult && groupAttackResult.victoryMessage && (
        <div className="victory-message">
          <p>{groupAttackResult.victoryMessage}</p>
        </div>
      )}
    </div>
  );
}

export default DungeonRoom;
