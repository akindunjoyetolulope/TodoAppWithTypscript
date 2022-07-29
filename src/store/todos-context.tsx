import React from "react";
import Todo from "../models/todos";
import { useState } from "react";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (x: string) => void;
};

interface Props {
    children: JSX.Element
  }


export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (x: string) => {},
});

const TodosContextProvider = ({children}: Props) => {
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

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
  };
  
  return (
    <TodosContext.Provider value={contextValue}>
     {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
