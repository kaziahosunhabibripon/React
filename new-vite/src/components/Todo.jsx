import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Todo = props => {
  const [todos, setTodos] = useContext(TodoContext);

  const completeTodo = e => {
    const filterTodos = todos.map(todo => {
      if (todo.id === e.target.value) {
        todo.completed = false;
        if (e.target.checked) {
          todo.completed = true;
        }
      }
      return todo;
    });
    setTodos(filterTodos);
  };

  const deleteTodo = e => {
    e.preventDefault();
    const filterTodo = todos.filter(todo => todo.id !== e.target.id);
    setTodos(filterTodo);
  };
  const isCompleted = props.completed ? "checked" : "";
  return (
    <>
      <p className="todo-item">
        <input
          type="checkbox"
          checked={isCompleted}
          value={props.id}
          id={props.id}
          onChange={e => completeTodo(e)}
        />
        <label htmlFor={props.id}> {props.title} </label>
        <button
          id={props.id}
          onClick={e => deleteTodo(e)}
          type="button"
          className="btn-delete"
        >
          Delete
        </button>
      </p>
    </>
  );
};

export default Todo;
