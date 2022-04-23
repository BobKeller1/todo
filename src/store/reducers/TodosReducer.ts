import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Todos: [],
};

export const TodosSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
  },
});

export default TodosSlice.reducer;
