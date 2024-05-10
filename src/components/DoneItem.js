import React from "react";

export const DoneItem = ({ doneTask }) => {
  return (
    <li className="TodoItem">
      <p className="doneTask">{doneTask.title}</p>
      <div className="h-spacer" />
    </li>
  );
};
