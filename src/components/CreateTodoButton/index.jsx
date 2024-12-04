import "./styles.css";

function CreateTodoButton({ onClick }) {
  return (
    <button className="CreateTodoButton" onClick={onClick}>
      Crear tarea
    </button>
  );
}

export { CreateTodoButton };
