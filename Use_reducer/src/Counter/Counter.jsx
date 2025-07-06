import React, { useState } from 'react'

function Counter() {

    const [count,SetCount] = useState(0);
    function handleIncrement(){
        SetCount((count) => count+1)
    }

    function handleDecrement(){
        SetCount((count) => count-1)
    }

    function handleReset(){
        SetCount(0);
    }

  return (
    <>
    <h1>count - {count}</h1>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default Counter

