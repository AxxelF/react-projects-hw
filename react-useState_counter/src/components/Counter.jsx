import React, { useState } from 'react'

function Counter({ title, step = 1, initialValue = 0 }) {
  const [count, setCount] = useState(initialValue)

  const increaseCount = () => setCount((prev) => prev + step)
  const decreaseCount = () => setCount((prev) => prev - step)
  const resetCount = () => setCount(0)

    return (
        <div className="counter">
        <h3>{title ? title : "Counter"}</h3>
        <span>Step: {step}</span>
        <b>{count}</b>
        <div className="counter-buttons">
          <button onClick={decreaseCount}>-</button>
          <button onClick={resetCount}>0</button>
          <button onClick={increaseCount}>+</button>
        </div>
      </div>
    )
}

export default Counter