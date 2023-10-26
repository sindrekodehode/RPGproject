/* eslint-disable react/prop-types */
function DungeonRoom({ room, navigateToRoom }) {
  return (
    <div>
      <img
        src={room.image}
        alt={`Room ${room.roomNr}`}
        className="dungeon-img"
      />

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
    </div>
  );
}

export default DungeonRoom;
