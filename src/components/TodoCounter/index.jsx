import "./styles.css";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  if (totalTodos <= 1) {
    return (
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de{" "}
        <span>{totalTodos}</span> Tarea.
      </h1>
    );
  } else {
    return (
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de{" "}
        <span>{totalTodos}</span> Tareas.
      </h1>
    );
  }
}

export { TodoCounter };
