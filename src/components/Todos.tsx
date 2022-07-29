import React, { useContext } from "react";
import TodosList from "./TodosItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const ctx = useContext(TodosContext);
  return (
    <div>
      <ul className={classes.todos}>
        {ctx.items.map((item) => (
          <TodosList
            key={item.id}
            id={item.id}
            text={item.text}
            onRemoveTodo={ctx.removeTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
