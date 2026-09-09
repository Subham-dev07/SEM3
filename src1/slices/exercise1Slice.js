import { createSlice } from "@reduxjs/toolkit";

/*
  EXERCISE 1 - Immer gotcha: primitive state
*/

const initialState = 0; 

const counterSlice = createSlice({
  name: "ex1counter",
  initialState,
  reducers: {
    increment: (state) => {
      state += 1; 
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
