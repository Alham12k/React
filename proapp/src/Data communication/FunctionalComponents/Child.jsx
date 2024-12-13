
import React from 'react'

export default function child(props) {
  return (
    <div>child
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        <h1>{props.marks.length}</h1>
    </div>
  )
}
