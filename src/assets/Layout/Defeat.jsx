/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";

export default function Defeat() {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate("/");
  };

  return (
    <div className="defeat-screen" onClick={handleStartGame}>
      <h1>Game Over</h1>
      <h3>Click anywhere to try again</h3>
    </div>
  );
}
