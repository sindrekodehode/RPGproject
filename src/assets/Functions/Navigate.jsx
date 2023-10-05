/* eslint-disable react/prop-types */
function DungeonRoom({ room, navigateToRoom }) {
  return (
    <div>
      <img
        src={room.image}
        alt={`Room ${room.roomNr}`}
        className="dungeon-img"
      />
      <p>{room.text}</p>
      <div className="direction-buttons">
        {room.directions.map((direction, index) => (
          <button
            key={index}
            onClick={() => navigateToRoom(room.exitTo[index])}
          >
            {direction}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DungeonRoom;
