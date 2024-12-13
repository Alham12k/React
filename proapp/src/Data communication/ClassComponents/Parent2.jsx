import React, { Component } from 'react'
import Child2 from './Child2'
export default class parent1 extends Component {
  render() {
    let age=19;
    let salary=25000;
    return (
      <div>parent1
        <Child2 name="Alham" age={age} salary={salary}/>
      </div>
    )
  }
}
