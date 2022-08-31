import React from 'react'

export default function Todo(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h3>{props.name}</h3>
    </div>
  )
}
