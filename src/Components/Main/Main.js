import React, { useState } from "react";
import * as M from "./Main_style";

export default function Main() {

  const [currentPosition, setCurrentPosition] = useState(1);

  const moveRalph = () => {

    let newPosition;
    do {
      newPosition = Math.floor(Math.random() * 9) + 1;
    } while (newPosition === currentPosition);

    setCurrentPosition(newPosition);
  };

  return (
    <M.Mainbox>
      <section className="painelgeral">
        {Array.from({ length: 9 }, (_, i) => {
          const id = i + 1;
          return (
            <section
              key={id}
              className={id === currentPosition ? "enemy" : "square"}
              id={id}
              onClick={id === currentPosition ? moveRalph : undefined}>
            </section>
          );
        })}
      </section>
    </M.Mainbox>
  );
}
