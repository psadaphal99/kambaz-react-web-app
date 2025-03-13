import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/heloReducer";
import counterReducer from "../Lab4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../Lab4/ReduxExamples/Addredux/addReducer";
import todosReducer from "../Lab4/ReduxExamples/Todos/TodosReducer";

const store = configureStore({
  reducer: { helloReducer,
            counterReducer,
            addReducer,
            todosReducer
   }});
export default store;

