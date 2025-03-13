// import { useState } from "react";
// import Button from "react-bootstrap/esm/Button";
// import FormControl from "react-bootstrap/esm/FormControl";
import ListGroup from "react-bootstrap/esm/ListGroup";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div>
      <h2>Todo List</h2>
      <ListGroup className="wd-margin-all-around wd-rounded-corners-inline fs-5 rounded border">
      <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}

      </ListGroup><hr/>
    </div>)
;}