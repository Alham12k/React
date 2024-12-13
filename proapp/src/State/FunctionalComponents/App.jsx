import React, {useState} from 'react'

export default function App() {
    let[count,setcount]=useState(0)

    const increment=()=>{
        setcount(++count)
        console.log("increment",count);
    }
    const decrement=()=>{
        setcount(--count)
        console.log("decrement",count);
    }
    const clear=()=>{
        setcount(count=0 )
        console.log("clear",count);
        
    }
  return (
    <div>App
        <h1>Counter:{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={clear}>Reset</button>
    </div>
  )
}
