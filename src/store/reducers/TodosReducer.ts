import { createSlice } from "@reduxjs/toolkit";

export interface ITodoItem {
  id: string
  title: string
  description: string
  expDate: string
  createDate: string
  isCompleted: boolean
  isInBasket: boolean
}

interface ITodoState {
  Todos: ITodoItem[]
  editingTodo: ITodoItem
  deletingTodo: ITodoItem
  isModalOpen: boolean
  activeFilter: string
  trashBasket: ITodoItem[]
}

const initialState: ITodoState = {
  Todos: [],
  editingTodo: {
    title: '',
    description: '',
    expDate: '',
    createDate: '',
    id: '',
    isCompleted: false,
    isInBasket: false
  },
  deletingTodo: {
    title: '',
    description: '',
    expDate: '',
    createDate: '',
    id: '',
    isCompleted: false,
    isInBasket: false
  },
  isModalOpen: false,
  activeFilter: "",
  trashBasket: []
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
      state.Todos = state.Todos.filter((todo) => todo.id !== action.payload.id)
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
    setDeletingTodo(state, action){
      state.deletingTodo = action.payload
    },
    setModalOpen(state){
      state.isModalOpen = true
    },
    setModalClose(state){
      state.isModalOpen = false
    },
    setActiveFilter(state, action){
      state.activeFilter = action.payload
    },
    setTrashBasket(state, action){
      state.trashBasket = action.payload
    },
    setIsInBasket(state) {
      state.deletingTodo.isInBasket = !state.deletingTodo.isInBasket
    },
    addItemToTrashBasket(state, action){
      state.trashBasket.push(action.payload)
    },
    deleteFromBasket(state, action){
      state.trashBasket = state.trashBasket.filter((todo) => todo.id !== action.payload.id)
    },
    clearBasket(state){
      state.trashBasket = []
    }
  },
});

export default TodosSlice.reducer;
