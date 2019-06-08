import React, { useState } from 'react';

const CounterUseState = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDncrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Counter with useState</h2>
      <p>
Count:
        {count}
      </p>
      <button id="inc-btn" name="increment" title="increment" type="button" onClick={handleIncrement}>+</button>
      <button id="dec-btn" name="decrement" title="decrement" type="button" onClick={handleDncrement}>-</button>
    </div>
  );
};
export default CounterUseState;
