import { createSlice } from "@reduxjs/toolkit";

/*
  EXERCISE 3 - Arrays with Immer (push vs return)
  TASK 1: addTodo -> try state.todos.push(action.payload)
  TASK 2: removeTodo -> try state.todos.filter(...) with return
  Try both approaches, both will work!
*/

const initialState = { todos: [] };

const todoSlice = createSlice({
  name: "ex3todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      
    },
    removeTodo: (state, action) => {

    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;