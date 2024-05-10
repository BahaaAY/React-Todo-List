import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  return (
    <div className="TodoListWrapper">
      <p>Tasks to do - 4</p>

      <ul className="TodoList">
        <TodoItem />
      </ul>
    </div>
  );
};
