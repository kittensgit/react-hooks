import React, {useEffect, useMemo, useState} from "react";

function complexCompute(num) {
  console.log("complexCompute")
  let i = 0
  while (i < 1000000000) i++
    return num * 2
}

function App() {

const [number, setNumber] = useState(42)
const [colored, setColored] = useState(false)

const styles = useMemo(()=>({
  color: colored ? 'darkred' : 'black'
}), [colored])

const computed = useMemo(()=>{
  complexCompute(number)
}, [number])

useEffect(()=>{
  console.log('change style')
}, [styles])

  return (
    <>
      <h1 style={styles}>вычесляемое свойство: {computed}</h1>
      <button onClick={()=>setNumber(prev => prev + 1)}>add</button>
      <button onClick={()=>setNumber(prev => prev - 1)}>delete</button>
      <button onClick={()=>setColored(prev => !prev)}>change</button>
    </>
  );
}

export default App;
