import { useContext } from "react";
import { useRef } from "react";
import { TodosContext } from "../store/todos-context";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
   const ctx = useContext(TodosContext)
   const todoTextInputRef = useRef<HTMLInputElement>(null);

   const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
 
    const enteredText =todoTextInputRef.current!.value;

    if(enteredText.trim().length === 0){
        //throw an error
        return;
    }

    ctx.addTodo(enteredText);
    // todoTextInputRef.current?.value()

   }

    return <form onSubmit={submitHandler} className={classes.form}>
         <label htmlFor="text">Todo Text</label>
         <input type="text" id="text" ref={todoTextInputRef} autoComplete="off" />
         <button>Add Todo</button>
    </form>
}

export default NewTodo;