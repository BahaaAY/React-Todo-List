import React from "react";
import { DoneItem } from "./DoneItem";

export const DoneList = () => {
  return (
    <div className="TodoListWrapper">
      <p>Done - 1</p>

      <ul className="TodoList">
        <DoneItem />
      </ul>
    </div>
  );
};
