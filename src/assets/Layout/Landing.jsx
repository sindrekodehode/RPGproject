import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate("/heroselector");
  };
  return (
    <div className="landing" onClick={handleStartGame}>
      <h1>Nauthilax Dungeon</h1>
      <p>Placeholder, will be added from Object</p>
    </div>
  );
}
