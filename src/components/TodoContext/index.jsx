import React from "react";
import { useLocalStorage } from "../App/useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodo,
    error,
    loading,
  } = useLocalStorage("TODOS_V1", []);

  const [filter, setFilter] = React.useState("all");
  const [searchValue, setSearchValue] = React.useState("");
  const [createErrorTodo, setCreateErrorTodo] = React.useState(false);

  function completeTodo(id) {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    const isCompletedTodo = newTodos[todoIndex].completed;
    newTodos[todoIndex].completed = !isCompletedTodo;
    saveTodo(newTodos);
  }

  function deleteTodo(id) {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos.splice(todoIndex, 1);
    saveTodo(newTodos);
  }

  function addTodo(text) {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
      id: crypto.randomUUID(),
    });
    saveTodo(newTodos);
  }

  function editTodo(id, newText) {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].text = newText;
    saveTodo(newTodos);
  }

  const handleFilterTask = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTasks = todos.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "active") {
      return task.completed === false;
    }
    return true; // Si el filtro es 'all', mostrar todas las tareas
  });

  const searchedTodos = filteredTasks.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  function getDefaultTodoText(id) {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    return todos[todoIndex];
  }

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed === true).length;

  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        todos,
        completedTodos,
        editTodo,
        totalTodos,
        searchedTodos,
        deleteTodo,
        completeTodo,
        searchValue,
        setSearchValue,
        saveTodo,
        addTodo,
        setCreateErrorTodo,
        createErrorTodo,
        handleFilterTask,
        filteredTasks,
        filter,
        setFilter,
        getDefaultTodoText,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
