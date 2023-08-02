import { useContext } from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { TodoEmpty } from '../TodoEmpty';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoMenu } from '../TodoMenu';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
  } = useContext(TodoContext);


  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoMenu />
      <TodoList>
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {(!loading && searchedTodos.length === 0) && <TodoEmpty />}

        {searchedTodos.map(todo => (
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            key={todo.text}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  )
}

export { AppUI };