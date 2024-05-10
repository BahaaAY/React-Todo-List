import { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { DoneList } from "./components/DoneList";

function App() {
  let [todos, setTodos] = useState([]);
  let [dones, setDones] = useState([]);

  function addTodoHandler(todo) {
    setTodos([...todos, todo]);
  }

  function markAsDoneHandler(todo) {
    let newTodos = todos.filter((t) => t !== todo);
    setTodos(newTodos);
    setDones([...dones, todo]);
  }

  function deleteTodoHandler(todo) {
    let newTodos = todos.filter((t) => t !== todo);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <TodoForm addTodoHandler={addTodoHandler} />
        <TodoList
          todos={todos}
          markAsDoneHandler={markAsDoneHandler}
          deleteTodoHandler={deleteTodoHandler}
        />
        <DoneList dones={dones} />
      </div>
    </div>
  );
}

export default App;
