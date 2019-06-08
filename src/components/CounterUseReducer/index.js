import React, { useReducer } from 'react';
import { handleDecrement, handleIncrement } from '../../actions'
import counterReducer from '../../reducers/counterReducer'

const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })

  const increment = () => dispatch(handleIncrement)
  const decrement = () => dispatch(handleDecrement)

  return (
    <div>
      <h2>Counter with useReducer</h2>
      <p>Count: {state.count}</p>
      <button id="inc-btn" name="increment" title="increment" onClick={increment}>+</button>
      <button id="dec-btn" name="decrement" title="decrement" onClick={decrement}>-</button>
    </div>
  )
}
export default CounterUseReducer;
