import elf from "../Images/Game/NPC/elfnpc.png";
import crab from "../Images/Game/NPC/crabnpc3.png";

const npc = [
  {
    cclass: "Cleric",
    class: "elf",
    hp: 130,
    damage: 8,
    dicenr: 1,
    modifier: 2,
    AC: 14,
    cdSkill: "heal",
    img: elf,
  },
  {
    cclass: "Tank",
    class: "crab",
    hp: 200,
    damage: 8,
    dicenr: 1,
    modifier: 2,
    AC: 20,
    cdSkill: "Clawhammer",
    img: crab,
  },
];

export { npc };
