import classes from "./TodoItem.module.css";


const TodosItem: React.FC<{ text: string}> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};

export default TodosItem;
