import "./styles.css";
import { useContext } from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  function handleSearch(e) {
    setSearchValue(e.target.value);
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
      <CreateTodoButton />
    </div>
  );
}

export { TodoSearch };
