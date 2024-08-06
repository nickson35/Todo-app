import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import Accordion from "./Accordion";

const userOptions = ["all", "today", "tomorrow", "completed"];

function App() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  return (
    <div id="wrapper" className="wrapper">
      <h1>Take your Schedule in your control</h1>
      <div className="todo-container">
        <div className="user-form-todo">
          <TodoForm
            task={task}
            setTask={setTask}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <Accordion task={task} setTask={setTask} />
        </div>
      </div>
    </div>
  );
}
export default App;
