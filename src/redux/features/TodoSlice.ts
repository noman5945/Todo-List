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
      state.todos.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((task) => task.ID !== action.payload);
    },
    changeTaskState: (state, action: PayloadAction<string>) => {
      const taskToggle = state.todos.find((item) => item.ID === action.payload);
      taskToggle!.isCompleted = !taskToggle?.isCompleted;
      state.todos.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
    },
  },
});

export const { addTask, removeTask, changeTaskState } = todoSlice.actions;

export default todoSlice.reducer;
