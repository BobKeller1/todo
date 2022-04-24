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
  deletingTodoId: string
  isModalOpen: boolean
  activeFilter: string
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
  },
  deletingTodoId: "",
  isModalOpen: false,
  activeFilter: ""
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
    },
    setDeletingTodoId(state, action){
      state.deletingTodoId = action.payload
    },
    setModalOpen(state){
      state.isModalOpen = true
    },
    setModalClose(state){
      state.isModalOpen = false
    },
    setActiveFilter(state, action){
      state.activeFilter = action.payload
    }
  },
});

export default TodosSlice.reducer;
