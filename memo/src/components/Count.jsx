import React, { useMemo, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const loopExpensive = () => {
    console.log("Expensive Function Running...");
    for (let i = 0; i < 9999999999; i++) {}
    return quantity * 2;
  };

  const expensiveResult = useMemo(() => {
    return loopExpensive();
  }, [quantity]);

  return (
    <>
      <h1>Counter: {count}</h1>
      <h1>Quantity: {quantity}</h1>
      <h2>Result: {expensiveResult}</h2>

      <button onClick={() => setCount(count + 1)}>
        Count +1
      </button>

      <button onClick={() => setQuantity(quantity + 1)}>
        Quantity +1
      </button>
    </>
  );
};

export default Count;