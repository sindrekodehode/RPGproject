import goblin from "../Images/Game/Monster/monster-goblin.png";
import skitterer from "../Images/Game/Monster/monster-skitterer.png";
import orc from "../Images/Game/Monster/monster-orc.png";
import skeleton from "../Images/Game/Monster/monster-skeleton.png";
import ehorror from "../Images/Game/Monster/eldritchhorror1.png";

const Monsters = [
  { type: "Goblin", AC: 8, Hp: 20, dmg: 5, modifier: 0, img: goblin },
  { type: "Skitterer", AC: 9, Hp: 30, dmg: 8, modifier: 0, img: skitterer },
  { type: "Orc", AC: 11, Hp: 40, dmg: 8, modifier: 2, img: orc },
  { type: "Skeleton", AC: 8, Hp: 30, dmg: 6, modifier: 1, img: skeleton },
  {
    type: "Eldritch Horror",
    AC: 5,
    Hp: 666,
    dmg: 50,
    modifier: 13,
    img: ehorror,
  },
];

export default Monsters;
