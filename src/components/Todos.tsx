import React from "react";
import Todo from "../models/todos";
import TodosList from "./TodosItem";

const Todos: React.FC<{ item: Todo[] }> = (props) => {
  return (
    <div>
      <ul>
        {props.item.map((item) => (
          <TodosList key={item.id} text={item.text}/>
        ))}
      </ul>
    </div>
  );
};


export default Todos;
