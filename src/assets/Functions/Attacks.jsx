export function attack(dmg, modifier, AC) {
  let damage = Math.floor(Math.random() * dmg) + (1 + modifier);
  let hit = Math.floor(Math.random() * 20) + 1;

  if (hit === 20) {
    return damage * 2;
  } else if (hit >= AC) {
    return damage;
  } else {
    return "The attack misses";
  }
}

// export function monsterTarget {

// }
