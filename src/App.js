import React, {useEffect, useState, useRef} from "react";

function App() {

const [value, setValue] = useState('initial')
const renderCount = useRef(1)
const inputRef = useRef(null)
const prevValue = useRef('')

useEffect(()=>{
  renderCount.current++
  // console.log(inputRef.current.value)
})

useEffect(()=>{
  prevValue.current = value
}, [value])

const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>количество рендеров: {renderCount.current}</h1>
      <h2>прошлое состояние: {prevValue.current}</h2>
      <input ref={inputRef} type='text' onChange={e => setValue(e.target.value)} value={value}/>
      <button onClick={focus}>фокус</button>
    </div>
  );
}

export default App;
