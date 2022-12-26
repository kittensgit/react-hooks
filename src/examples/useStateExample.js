import React, { useState } from "react";

function computeInitialCount(){
  console.log("some calculations...")
  return Math.trunc(Math.random() * 20)
}

function App() {
  
  const [count, setCount] = useState(()=>{
    return computeInitialCount()
  })

  const [state, setState] = useState({
    title: 'test',
    date: Date.now()
  })

  function increment(){
    // setCount(count + 1)
    setCount((prevCount) => {
      return prevCount + 1
    })
    // setCount(prev => prev + 1)
  }
  function decrement(){
    setCount(count - 1)
  }

  function updateTitle(){
    setState(prev => {
      return {
        ...prev,
        title: 'new test' 
      }
    })
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={updateTitle}>change title</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
