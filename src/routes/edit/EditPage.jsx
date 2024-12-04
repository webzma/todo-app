import { useContext, useState } from "react";
import { TodoForm } from "../../components/TodoForm";
import { TodoContext } from "../../components/TodoContext";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPage() {
  const { setCreateErrorTodo, editTodo, getDefaultTodoText } =
    useContext(TodoContext);

  const navigate = useNavigate();
  const { id } = useParams();

  const defaultTodoText = getDefaultTodoText(id).text;

  const [newTodoValue, setNewTodoValue] = useState(defaultTodoText || "");

  function onEditTodo() {
    if (newTodoValue.length === 0) {
      setCreateErrorTodo(true);
    } else {
      editTodo(id, newTodoValue);
      navigate("/");
    }
  }

  return (
    <div>
      <TodoForm
        title="Edita un TODO"
        action={onEditTodo}
        newTodoValue={newTodoValue}
        setNewTodoValue={setNewTodoValue}
        placeholder="Edita un TODO"
        actionButtonName="Editar"
        defaultTodoText={defaultTodoText}
      />
    </div>
  );
}
