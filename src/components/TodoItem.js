import React from "react";

export const TodoItem = ({ todo, markAsDoneHandler, deleteTodoHandler }) => {
  return (
    <li className="TodoItem">
      <p>{todo.title}</p>
      <div className="h-spacer" />
      <button
        onClick={() => {
          markAsDoneHandler(todo);
        }}
      >
        <img alt="complete task btn image" src="check.svg" />
      </button>
      <button
        onClick={() => {
          deleteTodoHandler(todo);
        }}
      >
        <img alt="delete task btn image" src="delete.svg" />
      </button>
    </li>
  );
};
