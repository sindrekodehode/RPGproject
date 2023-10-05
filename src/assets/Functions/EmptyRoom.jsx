export default function generateEmptyRoom(room) {
  const random = Math.floor(Math.random * 100);

  if (random >= 45) {
    room.encounterType = "Empty corridor";
  } else if (random >= 10) {
    room.encounterType = "Monster";
  } else {
    room.encounterType = "Treasure";
  }
}
