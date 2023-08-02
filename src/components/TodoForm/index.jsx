import './styles.css';
import { useState, useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { ErrorTodo } from '../ErrorTodo';

function TodoForm() {
  const { setOpenModal, addTodo, setCreateErrorTodo, createErrorTodo } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
    setCreateErrorTodo(false);
  }

  const onCreateTodo = () => {
    if (newTodoValue.length === 0) {
      setCreateErrorTodo(true);
    } else {
      addTodo(newTodoValue);
      setOpenModal(false);
    }
  }

  const onCancel = () => {
    setOpenModal(false);
    setCreateErrorTodo(false);
  }

  return (
    <div className='TodoFormContainer' onSubmit={onSubmit}>
      <h4 className='TodoFormTitle'>Crea un nuevo TODO</h4>
      <form className="TodoForm">
        <input
          type="text"
          className="createTaskInput"
          placeholder="Escribe un nuevo TODO"
          value={newTodoValue}
          onChange={onChange}
        />
        <button
          className="btn createTaskButton"
          onClick={onCreateTodo}
        >
          Crear
        </button>
        <button
          className="btn cancelTaskButton"
          onClick={onCancel}>
          Cancelar
        </button>
      </form>
      {createErrorTodo && <ErrorTodo />}
    </div>
  );
}

export { TodoForm };