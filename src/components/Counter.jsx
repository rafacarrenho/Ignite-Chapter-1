import { useState } from "react";
export function Counter() {
  const [counter, setCounter] = useState(9);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Incremento + 1
      </button>
    </div>
  );
}
