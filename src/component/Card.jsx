import React from "react";
import Actor from "./Actor";
import Singer from "./Singer";
function Card() {
  const actors = ["bapp raj", "omar sunny", "Salman shah"];

  const singgers = [
    { id: 1, name: "Dr. Mahfuz", age: 68 },
    { id: 2, name: "Tahsan", age: 45 },
    { id: 3, name: "Shuvro Deb", age: 57 },
  ];

  return (
    <>
      <h1>React Core Concepts</h1>
      {
        singgers.map(singer => <Singer singer={singer}/>)
      }
      {actors.map((actor) => (
        <Actor actor={actor} />
      ))}
    </>
  );
}

export default Card;
