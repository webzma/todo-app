import { useNavigate } from "react-router-dom";
import { TodoForm } from "../../components/TodoForm";
import { TodoContext } from "../../components/TodoContext";
import { useContext, useState } from "react";

export default function NewPage() {
  const { setCreateErrorTodo, addTodo } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const navigate = useNavigate();

  function onAddTodo() {
    if (newTodoValue.length === 0) {
      setCreateErrorTodo(true);
    } else {
      addTodo(newTodoValue);
      navigate("/");
    }
  }

  return (
    <div>
      <TodoForm
        title="Crea un nuevo TODO"
        action={onAddTodo}
        setNewTodoValue={setNewTodoValue}
        newTodoValue={newTodoValue}
        placeholder="Crea un nuevo TODO"
        actionButtonName="Crear"
      />
    </div>
  );
}
