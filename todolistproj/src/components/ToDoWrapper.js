import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
export const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);
  
    const addTodo = todo => {
      setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
      console.log(todos)
    }
  
    const toggleComplete = id => {
      setTodos(todos.map(todo  => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }
  
    const deleteTodo = id => {
      setTodos(todos.filter(todo => todo.id !== id))
    }
  
    const editTodo = id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }
  
    return (
      <div className='TodoWrapper'>
        <h1>Things To Get Done!</h1>
        <TodoForm addTodo={addTodo} />
        {/* Render the list of Todo components */}
        {todos.map((todo, index) => (
          todo.isEditing ? (
            <EditTodoForm key={todo.id} todo={todo} />
          ) : (
            <Todo key={todo.id} task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
          )
        ))}
      </div>
    );
  };
  