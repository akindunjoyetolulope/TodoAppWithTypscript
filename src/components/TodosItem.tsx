import classes from "./TodoItem.module.css";

const TodosItem: React.FC<{
  text: string;
  id: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item} key={props.id} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodosItem;
