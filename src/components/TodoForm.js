import React from "react";

export const TodoForm = ({ addTodoHandler }) => {
  function addTodo(e) {
    e.preventDefault();
    let taskTitle = e.target.elements.taskTitle.value;

    if (taskTitle.trim() === "") {
      return;
    }
    console.log(taskTitle);
    let todo = { title: taskTitle };
    e.target.reset();
    addTodoHandler(todo);
  }
  return (
    <form className="TodoForm" onSubmit={addTodo}>
      <input name="taskTitle" type="text" placeholder="Add a new task!" />
      <button type="submit">
        <img alt="add task button" src="plus.svg" />
      </button>
    </form>
  );
};
