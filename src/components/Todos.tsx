import React from "react";
import Todo from "../models/todos";
import TodosList from "./TodosItem";

import classes from "./Todos.module.css";

const Todos: React.FC<{ item: Todo[] }> = (props) => {
  return (
    <div>
      <ul className={classes.todos}>
        {props.item.map((item) => (
          <TodosList key={item.id} text={item.text}/>
        ))}
      </ul>
    </div>
  );
};


export default Todos;
