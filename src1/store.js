import { configureStore } from "@reduxjs/toolkit";
import ex1counter from "./slices/exercise1Slice";
import ex2user from "./slices/exercise2Slice";
import ex3todos from "./slices/exercise3Slice";

// All exercise slices are combined here.
export const store = configureStore({
  reducer: {
    ex1counter,
    ex2user,
    ex3todos
  },
});