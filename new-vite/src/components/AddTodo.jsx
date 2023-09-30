import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { v4 as uuidv4 } from "uuid";
const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useContext(TodoContext);

  const addTodo = e => {
    e.preventDefault();
    if ("" === title || undefined === title) {
      alert("Please enter a title");
      return;
    }
    const newTodos = [...todos, { id: uuidv4(), title, completed: false }];
    setTodos(newTodos);
    setTitle("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <div className="form-container">
        <input
          onChange={e => setTitle(e.target.value)}
          type="text"
          value={title}
          className="form-input"
          placeholder="Add a new todo"
        />
        <button onClick={addTodo} className="form-button" type="button">
          Add
        </button>
      </div>
    </>
  );
};

export default AddTodo;
