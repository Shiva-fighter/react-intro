import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  const handleChange = (value) => {
    setCounter(counter + value);
  };
  return (
    <>
      <h3>Counter:{counter}</h3>
      <button
        onClick={() => {
          handleChange(1);
        }}
      >
        Add1
      </button>
      <button
        onClick={() => {
          if (counter >= 1) {
            handleChange(-1);
          }
        }}
      >
        Sub1
      </button>
      <button
        onClick={() => {
          setCounter(counter * 2);
        }}
      >
        Double
      </button>
    </>
  );
}
