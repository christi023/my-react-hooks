import React, { useState } from 'react';

const HookCounter = () => {
  const [count, setCount] = useState(0);

  // method
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Count {count}</button>
    </div>
  );
};

export default HookCounter;
