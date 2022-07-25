import { useRef } from "react";

// interface Props {
//     onAddTodo: (x:string) => void
// }

const NewTodo: React.FC<{onAddTodo:(x:string) => void }> = (props) => {
   const todoTextInputRef = useRef<HTMLInputElement>(null);

   const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
 
    const enteredText =todoTextInputRef.current!.value;

    if(enteredText.trim().length === 0){
        //throw an error
        return;
    }

    props.onAddTodo(enteredText);

   }

    return <form onSubmit={submitHandler}>
         <label htmlFor="text">Todo Text</label>
         <input type="text" id="text" ref={todoTextInputRef} />
         <button>Add Todo</button>
    </form>
}

export default NewTodo;