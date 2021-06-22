import { useState } from "react";

export function Button() {

  const [counter, setCounter] = useState(0);
  //let counter = 0;

  function incremento() {
    setCounter(counter + 1);
  }

  return (
    <button onClick={incremento}>{counter}</button>
  );

}
