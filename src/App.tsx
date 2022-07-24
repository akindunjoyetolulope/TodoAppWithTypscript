import Todos from './components/Todos';
import Todo from './models/todos';



function App() {
  const todos = [
    new Todo("learn react"),
    new Todo("learn TypeScript")
  ]

  return (
    <div>
     <Todos item={todos}/>
    </div>
  );
}
 
export default App;
