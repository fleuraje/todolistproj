import React, { useState } from 'react';
export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  // function that captures value of state when the form is submitted
  const handleSubmit = (e) => {
    // function that prevents the default form submission
    e.preventDefault();

    if(value) {
    // add todo function
    addTodo(value);
    // clears the form after the user submits
    setValue("");
    }
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type="text"
        className='todo-input'
        value={value}
        placeholder='What is the task today?'
        onChange={(e) => setValue(e.target.value)} // Update the state with the new value
      />
      <button type='submit' className='todo-btn'>
        Add Task
      </button>

      

    </form>
  );
};

