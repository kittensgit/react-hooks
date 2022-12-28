import React, {useCallback, useState} from "react";
import ItemsList from "./ItemsList";

function App() {

const [colored, setColored] = useState(false)
const [count, setCount] = useState(1)

const styles = {
  color: colored ? 'darkred' : 'black'
}

const generateItemsFromAPI = useCallback((indexNumber)=>{
  return new Array(count).fill('').map((_, i)=> `element ${i+indexNumber}`)
}, [count])/* используем чтобы перерисовывалось только в том случае когда изменится getItems */

  return (
    <>
      <h1 style={styles}>вычесляемое свойство: {count}</h1>
      <button onClick={()=>setCount(prev => prev + 1)}>add</button>
      <button onClick={()=>setColored(prev => !prev)}>change</button>

      <ItemsList getItems={generateItemsFromAPI}/>
    </>
  );
}

export default App;
