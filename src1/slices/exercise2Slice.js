import { createSlice,current } from "@reduxjs/toolkit";

/*
  EXERCISE 2 - Nested object mutation
  TASK: write a "moveToCity" reducer that updates ONLY
  state.user.address.city, without spreading the whole object.
*/

const initialState = {
  user: {
    name: "Rahul",
    address: { city: "Delhi", pin: "110001" },
  },
};

const userSlice = createSlice({
  name: "ex2user",
  initialState,
  reducers: {
    moveToCity: (state, action) => {
      // TODO: write here
      
    },
  },
});

export const { moveToCity } = userSlice.actions;
export default userSlice.reducer;