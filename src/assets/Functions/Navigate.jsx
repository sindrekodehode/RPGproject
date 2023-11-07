/* eslint-disable react/prop-types */
import d20 from "../Images/Game/dice-d20-svgrepo-com.svg";

function DungeonRoom({
  room,
  navigateToRoom,
  isCombat,
  groupAttackResult,
  encounterAttackResult,
}) {
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
            <img className="d20" src={d20} alt="" />
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
        </div>
      )}

      {isCombat && encounterAttackResult && (
        <div className="attack-result">
          <p>Monster Attack Result: {encounterAttackResult}</p>
        </div>
      )}
    </div>
  );
}

export default DungeonRoom;
