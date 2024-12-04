import "./styles.css";
import { useContext } from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { useNavigate } from "react-router-dom";

function TodoSearch() {
  const navigate = useNavigate();
  const { searchValue, setSearchValue } = useContext(TodoContext);

  function handleSearch(e) {
    setSearchValue(e.target.value);
  }

  function onClickCreateTodo() {
    navigate("/new");
  }

  return (
    <div className="ContainerTodoSearch">
      <input
        type="text"
        placeholder="Busca una tarea"
        className="TodoSearch"
        onChange={handleSearch}
        value={searchValue}
      />
      <CreateTodoButton onClick={onClickCreateTodo} />
    </div>
  );
}

export { TodoSearch };
