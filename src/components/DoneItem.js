import React from "react";

export const DoneItem = ({ doneTask, deleteDoneHandler }) => {
  return (
    <li className="TodoItem">
      <p className="doneTask">{doneTask.title}</p>
      <div className="h-spacer" />
      <button
        onClick={() => {
          deleteDoneHandler(doneTask);
        }}
      >
        <img alt="delete task btn" src="delete.svg" />
      </button>
    </li>
  );
};
