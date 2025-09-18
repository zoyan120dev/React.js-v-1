import { useState } from "react";

function Bolar() {
  const [ball, setBall] = useState(0);
  const [message, setMessage] = useState("");

  const handleBall = () => {
    const newBall = ball + 1;
    setBall(newBall);

    if (newBall >= 6) {
      setMessage("Over Complete!");
    }
  };

  return (
    <>
      <h1>Balls: {ball}</h1>
      <p>{message}</p>
      <button onClick={handleBall}>Ball</button>
      <button>No Ball</button>
      <button>Wide Ball</button>
    </>
  );
}

export default Bolar;
