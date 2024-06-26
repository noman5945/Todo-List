import { createSlice } from "@reduxjs/toolkit";

const todoInitalState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "Todo",
  initialState: todoInitalState,
  reducers: {},
});

export default todoSlice.reducer;
