import React from "react";
import Actor from "./Actor";
import Singer from "./Singer";
import Labbary from "../file/Labbary";

function Card() {
  const actors = ["bapp raj", "omar sunny", "Salman shah"];

  const singgers = [
    { id: 1, name: "Dr. Mahfuz", age: 68 },
    { id: 2, name: "Tahsan", age: 45 },
    { id: 3, name: "Shuvro Deb", age: 57 },
  ];

  const books = [
    { id: 1, name: "Physics", price: 250 },
    { id: 2, name: "Chemistry", price: 350 },
    { id: 3, name: "Math", price: 254 },
    { id: 4, name: "Biology", price: 290 },
  ];

  return (
    <>
      <Labbary books={books} />

      <h1>React Core Concepts</h1>
      
      {singgers.map((singer) => (
        <Singer key={singer.id} singer={singer} />
      ))}

      {actors.map((actor, index) => (
        <Actor key={index} actor={actor} />
      ))}
    </>
  );
}

export default Card;
