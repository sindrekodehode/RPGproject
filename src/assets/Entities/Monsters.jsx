import goblin from "../Images/Game/Monster/monster-goblin.png";
import skitterer from "../Images/Game/Monster/monster-skitterer.png";
import orc from "../Images/Game/Monster/monster-orc.png";
import skeleton from "../Images/Game/Monster/monster-skeleton.png";
import ehorror from "../Images/Game/Monster/eldritchhorror1.png";

const Monsters = [
  {
    type: "Goblin",
    class: "monster",
    AC: 8,
    Hp: 20,
    diceNr: 1,
    init: 0,
    dmg: 5,
    modifier: 0,
    img: goblin,
  },
  {
    type: "Skitterer",
    class: "monster",
    AC: 9,
    Hp: 30,
    diceNr: 1,
    init: 1,
    dmg: 8,
    modifier: 0,
    img: skitterer,
  },
  {
    type: "Orc",
    class: "monster",
    AC: 11,
    Hp: 40,
    diceNr: 1,
    init: 2,
    dmg: 8,
    modifier: 2,
    img: orc,
  },
  {
    type: "Skeleton",
    class: "monster",
    AC: 8,
    Hp: 30,
    diceNr: 1,
    init: 1,
    dmg: 6,
    modifier: 1,
    img: skeleton,
  },
  {
    type: "Eldritch Horror",
    class: "monster",
    AC: 5,
    Hp: 666,
    diceNr: 1,
    init: 8,
    dmg: 50,
    modifier: 13,
    img: ehorror,
  },
];

export default Monsters;
