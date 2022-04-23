import { createSlice } from "@reduxjs/toolkit";

export interface ITodoItem {
  id: string
  title: string
  description: string
  expDate: string
  createDate: string
}

interface ITodoState {
  Todos: ITodoItem[]
  editingTodo: ITodoItem
}

const initialState: ITodoState = {
  Todos: [],
  editingTodo: {
    title: '',
    description: '',
    expDate: '',
    createDate: '',
    id: ''
  }
};

export const TodosSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    setTodos(state, action){
      state.Todos = action.payload
    },
    addTodo(state, action){
      state.Todos.push(action.payload)
    },
    removeTodo(state, action){
      state.Todos = state.Todos.filter((todo) => todo.id !== action.payload)
    },
    setEditingTodo(state, action){
      state.editingTodo = action.payload
    },
    updateTodo(state, action){
      state.Todos[action.payload.index] = action.payload.updatedTodo
    }


  },
});

export default TodosSlice.reducer;
