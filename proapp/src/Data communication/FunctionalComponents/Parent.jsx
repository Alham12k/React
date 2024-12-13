import React from 'react'
import Child from './Child';

export default function Parent() {
    let name="Alham";
    let age=19;
    let marks= ["10 ","20 ", "30 "];

  return (
    <div>parent
        <Child name={name} age={age} marks={marks}/>
    </div>
  )
}
