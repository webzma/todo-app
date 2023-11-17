import "./styles.css";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoEmpty() {
  const context = useContext(TodoContext);

  if (context.completedTodos === 0 && context.todos.length > 0) {
    return <p className="TodoEmpty">No has completado ningún todo</p>;
  }

  if (context.totalTodos === 0) {
    return <p className="TodoEmpty">No has creado ningún todo</p>;
  }

  if (context.completedTodos > 0 && context.todos.length > 0) {
    return <p className="TodoEmpty">No hay todos por hacer</p>;
  }
}

export { TodoEmpty };
