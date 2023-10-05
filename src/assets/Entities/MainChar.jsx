import maleFighter from "../Images/Game/PC/malefighter.png";
import femaleFighter from "../Images/Game/PC/femalefighter.png";
import malePaladin from "../Images/Game/PC/malepaladin.png";
import femalePaladin from "../Images/Game/PC/femalepaladin.png";
import maleRogue from "../Images/Game/PC/malerogue.png";
import femaleRogue from "../Images/Game/PC/femalerogue.png";
import maleWizard from "../Images/Game/PC/malewizard.png";
import femaleWizard from "../Images/Game/PC/femalewizard.png";

const classes = [
  {
    cclass: "Fighter",
    hp: 150,
    damage: 10,
    dicenr: 1,
    modifier: 2,
    AC: 18,
    cdSkill: "action surge",
    maleImage: maleFighter,
    femaleImage: femaleFighter,
  },
  {
    cclass: "Paladin",
    hp: 130,
    damage: 8,
    dicenr: 1,
    modifier: 2,
    AC: 16,
    cdSkill: "lay on hands",
    maleImage: malePaladin,
    femaleImage: femalePaladin,
  },
  {
    cclass: "Rogue",
    hp: 110,
    damage: 6,
    dicenr: 1,
    modifier: 2,
    AC: 14,
    cdSkill: "sneak attack",
    maleImage: maleRogue,
    femaleImage: femaleRogue,
  },
  {
    cclass: "Wizard",
    hp: 90,
    damage: 6,
    dicenr: 3,
    modifier: 3,
    AC: 11,
    cdSkill: "blur",
    maleImage: maleWizard,
    femaleImage: femaleWizard,
  },
];

export { classes };
