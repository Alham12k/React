import React, { Component } from 'react'

export default class Child1 extends Component {
    componentDidMount(){
    }
  render() {
    return (
      <div>Child1
        <h1>{this.props.name}</h1>
        <h1>{this.props.age}</h1>
        <h1>{this.props.salary}</h1>
      </div>
    )
  }
}
