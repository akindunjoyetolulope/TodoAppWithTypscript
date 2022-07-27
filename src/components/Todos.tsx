import React from "react";
import Todo from "../models/todos";
import TodosList from "./TodosItem";

import classes from "./Todos.module.css";

const Todos: React.FC<{ item: Todo[]; onRemoveTodo: (x: string) => void }> = (
  props
) => {
  return (
    <div>
      <ul className={classes.todos}>
        {props.item.map((item) => (
          <TodosList
           key={item.id}
            id={item.id}
            text={item.text}
            onRemoveTodo={props.onRemoveTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
