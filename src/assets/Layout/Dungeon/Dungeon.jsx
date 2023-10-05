import straightCorridor from "../../Images/Game/Dungeon/corridor-straight.png";
import straightCorridor2 from "../../Images/Game/Dungeon/corridor-straight2.png";
import leftbranchCorridor from "../../Images/Game/Dungeon/corridor-door-left.png";
import tBranchCorridor from "../../Images/Game/Dungeon/corridor-t-junction.png";
import treasureRoom from "../../Images/Game/Dungeon/chest.png";
import crabNpc from "../../Images/Game/NPC/crabnpc3.png";
import elfNpc from "../../Images/Game/NPC/elfnpc.png";
import { emptyRoom } from "../../Text/text.jsx";

const dungeonData = [
  {
    roomNr: 1,
    image: straightCorridor,
    text: emptyRoom,
    roomType: "start",
    directions: ["Forward"],
    exitTo: [2],
  },
  {
    roomNr: 2,
    image: leftbranchCorridor,
    text: emptyRoom,
    roomType: "goblin",
    directions: ["Left", "Forward", "Back"],
    exitTo: [3, 4, 1],
  },
  {
    roomNr: 3,
    image: elfNpc,
    text: emptyRoom,
    roomType: "elf",
    directions: ["Back"],
    exitTo: [2],
  },
  {
    roomNr: 4,
    image: straightCorridor,
    text: emptyRoom,
    roomType: "empty",
    directions: ["Forward", "Back"],
    exitTo: [5, 2],
  },
  {
    roomNr: 5,
    image: tBranchCorridor,
    text: emptyRoom,
    roomType: "empty",
    directions: ["Left", "Back", "Right"],
    exitTo: [11, 4, 6],
  },
  {
    roomNr: 6,
    image: straightCorridor,
    text: emptyRoom,
    roomType: "empty",
    directions: ["Forward", "Back"],
    exitTo: [7, 5],
  },
  {
    roomNr: 7,
    image: tBranchCorridor,
    text: emptyRoom,
    roomType: "empty",
    directions: ["Left", "Back", "Right"],
    exitTo: [8, 6, 9],
  },
  {
    roomNr: 8,
    image: straightCorridor,
    text: emptyRoom,
    roomType: "orc",
    directions: ["Back"],
    exitTo: [7],
  },
  {
    roomNr: 9,
    image: straightCorridor,
    text: emptyRoom,
    roomType: "empty",
    directions: ["Forward", "Back"],
    exitTo: [10, 7],
  },
  {
    roomNr: 10,
    image: treasureRoom,
    text: emptyRoom,
    roomType: "treasure",
    directions: ["Back"],
    exitTo: [9],
  },
  {
    roomNr: 11,
    image: straightCorridor,
    text: emptyRoom,
    roomType: "empty",
    directions: ["Forward", "Back"],
    exitTo: [12, 5],
  },
  {
    roomNr: 12,
    image: straightCorridor2,
    text: emptyRoom,
    roomType: "skeleton",
    directions: ["Forward", "Back"],
    exitTo: [13, 11],
  },
  {
    roomNr: 13,
    image: straightCorridor,
    text: emptyRoom,
    roomType: "empty",
    directions: ["Forward", "Back"],
    exitTo: [14, 12],
  },
  {
    roomNr: 14,
    image: straightCorridor2,
    text: emptyRoom,
    roomType: "empty",
    directions: ["Forward", "Back"],
    exitTo: [15, 13],
  },
  {
    roomNr: 15,
    image: crabNpc,
    text: emptyRoom,
    roomType: "crab",
    directions: ["Forward", "Back"],
    exitTo: [16, 14],
  },
  {
    roomNr: 16,
    image: treasureRoom,
    text: emptyRoom,
    roomType: "boss",
    directions: ["Back"],
    exitTo: [15],
  },
];

export default dungeonData;
