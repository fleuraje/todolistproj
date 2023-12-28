import React, { useState } from 'react';
import { EditTodoForm } from './EditTodoForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleEditTodo = (editedValue) => {
    editTodo(editedValue, task.id);
    setIsEditing(false);
  };

  return (
    <div className="Todo">
      {isEditing ? (
        <EditTodoForm task={task} editTodo={handleEditTodo} onCancel={handleCancelEdit} />
      ) : (
        <>
          <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>
            {task.task}
          </p>
          <div>
            <FontAwesomeIcon className="edit-icon" icon={faPenSquare} onClick={handleEditClick} />
            <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
          </div>
        </>
      )}
    </div>
  );
};
