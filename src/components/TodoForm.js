import React from "react";

export const TodoForm = () => {
  return (
    <div className="TodoForm">
      <input type="text" placeholder="Add a new task!" />
      <button type="submit">
        <img src="plus.svg" />
      </button>
    </div>
  );
};
