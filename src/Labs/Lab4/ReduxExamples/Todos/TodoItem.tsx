import Button from "react-bootstrap/esm/Button";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./TodosReducer";

export default function TodoItem({ todo}: {
    todo: { id: string; title: string }
  }) {
    const dispatch = useDispatch();

    return (
      <ListGroup.Item key={todo.id} className="border">
        <Button onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click" style={{ float: 'right', margin: 5 }} 
                variant="primary"  
                className="btn btn-danger"> Delete </Button>
        <Button onClick={() =>  dispatch(setTodo(todo))}
                id="wd-set-todo-click" style={{ float: 'right', margin: 5 }} 
                variant="primary"  
                className="btn"> Edit </Button>
        {todo.title}    </ListGroup.Item>);}
  
  