import React, { useState } from 'react';

export default function HookArray() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    // first argument is array, then spread items
    // then push ne object
    setItems([
      ...items, // copy all items in array
      {
        // append new item and pass it to setter function
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      }, // random number between 1 and 10
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
