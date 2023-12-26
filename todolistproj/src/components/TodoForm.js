import React from 'react'
import { useState } from 'react'
import { ToDoWrapper } from './ToDoWrapper'

export const TodoForm = ({addTodo}) => {
    const[value,setValue] = useState("")
//function that captures value of state when form is submitted 
    const handleSubmit = e => {
        //functin that prevents default action
        e.preventDefault();

        addTodo(value);

        setValue("")
    }
  return (
    <form className= 'TodoForm' onSubmit= {handleSubmit}> 
    <input type ="text" className='todo-input' value= {value}
    placeholder='What is the task today?' onChange={(e) => console.log(e.target.value)} /> 
    <button type='submit' className ='todo-btn'>Add Task
    </button>
    
    </form>
  )
}
