import React, {useEffect, useState} from "react";

function App() {

  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x: 0, y: 0
  })

  // useEffect(()=>{
  //   console.log('render')
  // })

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
    .then(json => setData(json)) 

    return () => {
      console.log('clean type') // очистка вызывается всегда когда мы заново заходим в колбэк
    }
  }, [type]) 

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(()=>{
    console.log('ComponentDidMount')

    window.addEventListener('mousemove', mouseMoveHandler)
  }, [])

  return (
    <div>
      <h1>Resource: {type}</h1>

      <button onClick={()=>setType('users')}>Users</button>
      <button onClick={()=>setType('todos')}>Todos</button>
      <button onClick={()=>setType('posts')}>Posts</button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App;
