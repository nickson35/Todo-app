import { FaPlus } from "react-icons/fa";
import "./App.css";

const TodoForm = ({ setTask, inputValue, setInputValue }) => {
  const handleChangeInput = (e) => {
    const input = e.target.value;
    setInputValue(input);
  };

  function handleAddTask(e) {
    e.preventDefault();
    setTask((prev) => [...prev, inputValue]);
    setInputValue("");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          name="taskTitle"
          value={inputValue}
          onChange={handleChangeInput}
          placeholder="Your Task"
          aria-label="task title input"
          title="MIN characters 1 & MAX characters 40"
          autoComplete="off"
          required
        />

        <button type="submit" aria-label="add task button">
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
