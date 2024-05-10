import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, markAsDoneHandler, deleteTodoHandler }) => {
  return (
    <div className="TodoListWrapper">
      <p>Tasks to do - {todos.length}</p>

      <ul className="TodoList">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            markAsDoneHandler={markAsDoneHandler}
            deleteTodoHandler={deleteTodoHandler}
          />
        ))}
      </ul>
    </div>
  );
};
