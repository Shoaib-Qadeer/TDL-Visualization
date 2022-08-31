import React, { useEffect } from 'react'
import TodoItem from '../todo/TodoItem'
export default function todos(props) {

 useEffect=()=>{
  console.log(props.tasks[0].title)
  console.log("New")
 }
 
  return (
    <div className='container'>
      <h3>Todos List!</h3>
      <TodoItem todo={props.tasks[0]} name="Abdul Hameed"/>
    </div>
  )
}
