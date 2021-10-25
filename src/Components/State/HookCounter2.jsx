import React, { useState } from 'react';

const HookCounter2 = () => {
  const initialState = 0;
  const [counter, setCounter] = useState(initialState);

  // better way with prev count state
  const increment5 = () => {
    for (let i = 0; i < 5; i++) {
      setCounter((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      Count: {counter}
      <button onClick={() => setCounter(initialState)}>Reset</button>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>Increment</button>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>Decrement</button>
      <button onClick={increment5}>Increment 5</button>
    </div>
  );
};

export default HookCounter2;
