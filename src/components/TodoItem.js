import React from "react";

export const TodoItem = () => {
  return (
    <li className="TodoItem">
      <p>Task 1</p>
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
