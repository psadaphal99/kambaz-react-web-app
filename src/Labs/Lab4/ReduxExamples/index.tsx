// import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./Addredux";
import TodoList from "./Todos/TodoList";

export default function ReduxExamples() {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux></HelloRedux>
      <CounterRedux></CounterRedux>
      <AddRedux></AddRedux>
      <TodoList></TodoList>
    </div>
  );
};

