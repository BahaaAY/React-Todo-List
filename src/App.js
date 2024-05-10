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

  return (
    <div className="App">
      <div className="wrapper">
        <TodoForm addTodoHandler={addTodoHandler} />
        <TodoList todos={todos} />
        <DoneList done={dones} />
      </div>
    </div>
  );
}

export default App;
