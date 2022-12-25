import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count + 1)
  }
  function decrement(){
    setCount(count - 1)
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
