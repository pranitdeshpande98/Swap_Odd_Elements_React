import React, { useState } from "react";

const App = () => {
  const cartA = [
    "apples",
    "bananas",
    "grapes",
    "oranges",
    "pears",
    "pineapple",
  ];
  const cartB = ["potatoes", "beans", "carrots", "spinach", "kale", "broccoli"];

  const [displayCartA, setDisplayCartA] = useState(cartA);
  const [displayCartB, setDisplayCartB] = useState(cartB);

  const handleSwap = () => {
    const newCartA = [...displayCartA];
    const newCartB = [...displayCartB];

    for (let i = 0; i < Math.min(newCartA.length, newCartB.length); i += 2) {
      const temp = newCartA[i];
      newCartA[i] = newCartB[i];
      newCartB[i] = temp;
    }

    setDisplayCartA(newCartA);
    setDisplayCartB(newCartB);
  };

  return (
    <div>
      <div>
        <h2>Cart A</h2>
        <ul>
          {displayCartA.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Cart B</h2>
        <ul>
          {displayCartB.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleSwap}>Swap Odd Items</button>
    </div>
  );
};

export default App;
