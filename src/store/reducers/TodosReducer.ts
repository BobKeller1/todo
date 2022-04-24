import { createSlice } from "@reduxjs/toolkit";

export interface ITodoItem {
  id: string
  title: string
  description: string
  expDate: string
  createDate: string
  isCompleted: boolean
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
    id: '',
    isCompleted: false
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
    },
    setTodoCompleted(state, action){
      state.Todos[action.payload].isCompleted = !state.Todos[action.payload].isCompleted

    }


  },
});

export default TodosSlice.reducer;
