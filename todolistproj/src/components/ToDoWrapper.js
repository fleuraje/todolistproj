import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    console.log(todos);
  };

  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodo} />
      {/* Render the list of Todo components */}
      {todos.map(todo => (
        <Todo key={todo.id} task={todo} />
      ))}
    </div>
  );
};
