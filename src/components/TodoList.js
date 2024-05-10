import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos }) => {
  return (
    <div className="TodoListWrapper">
      <p>Tasks to do - {todos.length}</p>

      <ul className="TodoList">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
