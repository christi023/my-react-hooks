import React, { useState, useEffect } from 'react';

export default function IntervalTimer() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    // cleanup
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>Count : {count}</div>;
}
