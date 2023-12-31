import "./styles.css";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { setOpenModal } = useContext(TodoContext);

  return (
    <button
      className="CreateTodoButton"
      onClick={() => setOpenModal((openModal) => !openModal)}
    >
      Crear tarea
    </button>
  );
}

export { CreateTodoButton };
