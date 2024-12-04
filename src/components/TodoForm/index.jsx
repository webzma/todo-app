import "./styles.css";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { ErrorTodo } from "../ErrorTodo";
import { useNavigate } from "react-router-dom";

function TodoForm({
  title,
  action,
  setNewTodoValue,
  newTodoValue,
  placeholder,
  actionButtonName,
}) {
  const navigate = useNavigate();
  const { setCreateErrorTodo, createErrorTodo } = useContext(TodoContext);

  const onSubmit = (e) => {
    e.preventDefault();
    action();
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
    setCreateErrorTodo(false);
  };

  const onCancel = () => {
    setCreateErrorTodo(false);
    navigate("/");
  };

  return (
    <div className="TodoFormContainer">
      <h4 className="TodoFormTitle">{title}</h4>
      <form className="TodoForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="createTaskInput"
          placeholder={placeholder}
          value={newTodoValue}
          onChange={onChange}
        />
        <button className="btn createTaskButton" type="submit">
          {actionButtonName}
        </button>
        <button className="btn cancelTaskButton" onClick={onCancel}>
          Cancelar
        </button>
      </form>
      {createErrorTodo && <ErrorTodo />}
    </div>
  );
}

export { TodoForm };
