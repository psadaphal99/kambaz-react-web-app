import Button from "react-bootstrap/esm/Button";
import FormControl from "react-bootstrap/esm/FormControl";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./TodosReducer";


export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();

    return (
      <ListGroup.Item className="d-flex align-items-center gap-2 border">
        <FormControl value={todo.title}
          onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }/>
        <Button onClick={() => dispatch(updateTodo(todo))}
                id="wd-update-todo-click"
                variant="primary"  
                className="btn btn-warning"> Update </Button>

        <Button onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click" 
                variant="primary"  
                className="btn btn-success"> Add </Button>
      </ListGroup.Item>
  );}
  