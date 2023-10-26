/* eslint-disable react/prop-types */
import d20 from "../Images/Game/dice-d20-svgrepo-com.svg";

function DungeonRoom({ room, navigateToRoom, isCombat }) {
  return (
    <div>
      <img
        src={room.image}
        alt={`Room ${room.roomNr}`}
        className="dungeon-img"
      />

      {isCombat ? (
        <div className="diceContainer">
          {" "}
          <img className="d20" src={d20} alt="" />{" "}
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
    </div>
  );
}

export default DungeonRoom;
