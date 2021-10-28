import React, { useReducer } from 'react';
// maintained a state object to track two different counters, to update the second counter, we also had to create additional switch cases in the reducer function.

const initialState = {
  firstCounter: 0,
  // state as obj
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': // objects
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'increment2': // objects
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};
export default function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>First Counter - {count.firstCounter}</div>
      <div>Second Counter - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
      <div>
        <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
          Increment CounterTwo
        </button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
          Decrement CounterTwo
        </button>
      </div>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
