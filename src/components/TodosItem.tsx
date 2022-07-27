import classes from "./TodoItem.module.css";

const TodosItem: React.FC<{
  text: string;
  id: string;
  onRemoveTodo: (x: string) => void;
}> = (props) => {
  
  const deleteTodo = () => {
    props.onRemoveTodo(props.id)
  }
  

  return (
    <li className={classes.item} key={props.id} onClick={deleteTodo}>
      {props.text}
    </li>
  );
};

export default TodosItem;
