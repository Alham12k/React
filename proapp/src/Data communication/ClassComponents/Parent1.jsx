import React, { Component } from 'react'
import Child1 from './Child1'
import Children from './Children'
export default class Parent1 extends Component {
  render() {
    return (
      <div>Parent1
        <Child1>
            <Children/>
            
        </Child1>
      </div>
    )
  }
}
