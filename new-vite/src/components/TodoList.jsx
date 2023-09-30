import { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "../context/TodoContext";
const TodoList = () => {
  const [todos] = useContext(TodoContext);
  return 1 <= todos.length ? (
    todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          completed={todo.completed}
          title={todo.title}
          id={todo.id}
        />
      );
    })
  ) : (
    <h4> No todo Found. Please add some todo.</h4>
  );
};

export default TodoList;
