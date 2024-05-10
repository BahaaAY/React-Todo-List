import React from "react";

export const TodoItem = ({ todo }) => {
  return (
    <li className="TodoItem">
      <p>{todo.title}</p>
      <div className="h-spacer" />
      <button>
        <img src="check.svg" />
      </button>
      <button>
        <img src="delete.svg" />
      </button>
    </li>
  );
};
