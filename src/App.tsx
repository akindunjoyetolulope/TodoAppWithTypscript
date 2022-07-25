import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todos';



function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  // const todos = [
  //   new Todo("learn react"),
  //   new Todo("learn TypeScript")
  // ]

    const addTodoHandler = (x:string) => {
        const NewTodo = new Todo(x)
        setTodos((prevTodos)=> {
          return prevTodos.concat(NewTodo);
        })

    }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
     <Todos item={todos}/>
    </div>
  );
}
 
export default App;
