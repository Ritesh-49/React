import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 8;

  const addValue = ()=>{
    // setCounter(counter + 1 )
    setCounter(prevCounter => prevCounter + 1);  {/*prevCounter = previous value (counter)*/}
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter  + 1)
    console.log('clicked',counter);
    
  }
  const removeValue = ()=>{
    console.log('clicked',counter);
    if(counter>0){
    setCounter(counter - 1)
    }
    
  }
  return(
    <>
      <h1>Counter project</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
