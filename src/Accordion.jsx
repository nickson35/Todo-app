import "./App.css";
import { MdDelete } from "react-icons/md";

const Accordion = ({ task, setTask }) => {
  function handleDeleteTask(index) {
    if (index === 0) {
      setTask(task.filter((item, i) => i !== index)); // item is a thowable variable and can be represented as "_ " too
    }
  }

  return (
    <>
      {task.map((item, index) => {
        return (
          <div key={index} className="todo-list-items">
            <p className="todo-title">{item}</p>

            <button
              className="todo-delete-btn"
              onClick={() => handleDeleteTask(index)}
              aria-label="delete button "
              title="Delete"
            >
              <MdDelete />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
