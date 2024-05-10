import React from "react";
import { DoneItem } from "./DoneItem";

export const DoneList = ({ dones }) => {
  return (
    <div className="TodoListWrapper">
      <p>Done - {dones.length}</p>

      <ul className="TodoList">
        {dones.map((done, index) => (
          <DoneItem key={index} doneTask={done} />
        ))}
      </ul>
    </div>
  );
};
