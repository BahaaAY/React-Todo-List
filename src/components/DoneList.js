import React from "react";
import { DoneItem } from "./DoneItem";

export const DoneList = ({ dones, deleteDoneHandler }) => {
  return (
    <div className="TodoListWrapper">
      <p>Done - {dones.length}</p>

      <ul className="TodoList">
        {dones.map((done, index) => (
          <DoneItem
            key={index}
            doneTask={done}
            deleteDoneHandler={deleteDoneHandler}
          />
        ))}
      </ul>
    </div>
  );
};
