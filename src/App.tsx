import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todos";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (x: string) => {
    const NewTodo = new Todo(x);
    setTodos((prevTodos) => {
      return prevTodos.concat(NewTodo);
    });
  };

  const deleteTodoHandler = (x: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((prevTodo) => prevTodo.id !== x);
    });
  };

  return (
    <div className="app">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos item={todos} onRemoveTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
