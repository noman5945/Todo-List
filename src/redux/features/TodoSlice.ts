import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTask = {
  ID: string;
  Title: string;
  Description: string;
  isCompleted?: boolean;
};

type TTasksInit = {
  todos: TTask[];
};

const todoInitalState: TTasksInit = {
  todos: [],
};

const todoSlice = createSlice({
  name: "Todo",
  initialState: todoInitalState,
  reducers: {
    addTask: (state, action) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((task) => task.ID !== action.payload);
    },
  },
});

export const { addTask, removeTask } = todoSlice.actions;

export default todoSlice.reducer;
