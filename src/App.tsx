import React, {useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import {SVGSource} from "./components/Icons";
import MainLayout from "./layouts/main";
import Main from "./pages/Main";
import {BrowserRouter} from "react-router-dom";
import {ITodoItem, TodosSlice} from "./store/reducers/TodosReducer";
import {useAppDispatch, useAppSelector} from "./store/hooks/redux";
import DeleteTodoModal from "./components/modals/DeleteTodoModal";


function App() {
  const todos = useAppSelector((state) => state.TodosReducer.Todos)
  const isModalOpen = useAppSelector((state) => state.TodosReducer.isModalOpen)
  const {setTodos} = TodosSlice.actions
  const dispatch = useAppDispatch();

  const getData = () => {
    const todos: ITodoItem[] = JSON.parse(localStorage.getItem("todos") || "[]")
    if (todos){
      dispatch(setTodos(todos))
    }
  }

  const setData = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    setData()
  }, [todos])

  return (
    <div className="App">
      <DeleteTodoModal isModalOpen={isModalOpen}/>
      <SVGSource/>
      <Header />
      <BrowserRouter>
        <MainLayout children={<Main />}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
