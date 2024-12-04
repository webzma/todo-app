import { useContext } from "react";
import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoList } from "../../components/TodoList";
import { TodoItem } from "../../components/TodoItem";
import { TodoLoading } from "../../components/TodoLoading";
import { TodoError } from "../../components/TodoError";
import { TodoEmpty } from "../../components/TodoEmpty";
import { TodoMenu } from "../../components/TodoMenu";
import { TodoContext } from "../../components/TodoContext";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo } =
    useContext(TodoContext);
  const navigate = useNavigate();

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoMenu />
      <TodoList>
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {!loading && searchedTodos.length === 0 && <TodoEmpty />}

        {searchedTodos.map((todo) => (
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            key={todo.id}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={() => navigate(`/edit/${todo.id}`)}
          />
        ))}
      </TodoList>
    </>
  );
}

export { HomePage };
