import { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { DoneList } from "./components/DoneList";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <TodoForm />
        <TodoList />
        <DoneList />
      </div>
    </div>
  );
}

export default App;
