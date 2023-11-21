/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { classes } from "../Entities/MainChar";
import { useEncounter } from "../Functions/AppContext.jsx";

export default function HeroSelector() {
  const { isMale, setIsMale } = useEncounter();
  const { chosenHero, setChosenHero, setHeroHp } = useEncounter();
  const navigate = useNavigate();
  const toggleGender = () => {
    setIsMale((prevIsMale) => !prevIsMale);
  };

  const handleHeroSelection = (hero) => {
    setChosenHero(hero);
    setHeroHp(hero.hp);

    navigate("/mainscreen", { state: { chosenHero: hero, isMale } });
  };

  function HeroCard(hero) {
    const {
      cclass,
      hp,
      damage,
      modifier,
      AC,
      cdSkill,
      maleImage,
      femaleImage,
      dicenr,
    } = hero;

    let damageText;

    if (dicenr > 1) {
      damageText = `${dicenr}d${damage} + ${modifier}`;
    } else {
      damageText = `d${damage} + ${modifier}`;
    }

    return (
      <div className="hero-card" onClick={() => handleHeroSelection(hero)}>
        <h1>{cclass}</h1>
        <img src={isMale ? maleImage : femaleImage} alt="" />
        <div className="hero-stats">
          <p>HP: {hp}</p>
          <p>AC: {AC}</p>
          <p>Dmg: {damageText}</p>
          <p>Special: {cdSkill}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mainchar">
      <h1>Choose Your Hero!</h1>
      <div className="genderchoice">
        <button onClick={toggleGender}>♂️/♀️</button>
      </div>
      <div className="herochoice">
        {classes.map((hero) => (
          <HeroCard key={hero.cclass} {...hero} />
        ))}
      </div>
    </div>
  );
}
