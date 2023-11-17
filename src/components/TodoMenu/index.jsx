import "./styles.css";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoMenu() {
  const context = useContext(TodoContext);
  const isActive = context.filter;
  return (
    <nav className="todoNav">
      <div className="todoNameSpan">TAREAS</div>
      <ul className="todoNav-list">
        <li
          className={
            isActive === "active"
              ? "todoNav-list__item active"
              : "todoNav-list__item"
          }
          onClick={() => context.handleFilterTask("active")}
        >
          Activas
        </li>
        <li
          className={
            isActive === "completed"
              ? "todoNav-list__item active"
              : "todoNav-list__item"
          }
          onClick={() => context.handleFilterTask("completed")}
        >
          Completadas
        </li>
        <li
          className={
            isActive === "all"
              ? "todoNav-list__item active"
              : "todoNav-list__item"
          }
          onClick={() => context.handleFilterTask("all")}
        >
          Todas
        </li>
      </ul>
    </nav>
  );
}

export { TodoMenu };
