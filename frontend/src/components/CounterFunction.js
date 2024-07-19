import React, { useState } from "react";

function CounterFunction() {
  let [number, setNumber] = useState(0);

  //there are no any constructor or render method in functional component for it functions use Hooks
    // no need to bind the function

    function increment() {
        setNumber(++number)//update state
    }

  return (
    <div>
        <h3>functional component</h3>
      <h1>Counter = {number}</h1>
      <button onClick={e=> increment()}>Increment</button>
    </div>
  );
}

export default CounterFunction;