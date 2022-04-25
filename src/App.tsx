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
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const todos = useAppSelector((state) => state.TodosReducer.Todos)
  const trash = useAppSelector((state) => state.TodosReducer.trashBasket)
  const {isModalOpen} = useAppSelector((state) => state.TodosReducer)
  const {setTodos,setTrashBasket} = TodosSlice.actions
  const dispatch = useAppDispatch();

  const getData = () => {
    const todos: ITodoItem[] = JSON.parse(localStorage.getItem("todos") || "[]")
    const trash: ITodoItem[] = JSON.parse(localStorage.getItem("trash") || "[]")
    if (todos){
      dispatch(setTodos(todos))
      dispatch(setTrashBasket(trash))
    }
  }



  const setData = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
    localStorage.setItem('trash', JSON.stringify(trash))
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    setData()
  }, [todos, trash])

  return (
    <div className="App">
      <DeleteTodoModal modalMessage={"Вы действительно хотите удалить эту задачу?"} isModalOpen={isModalOpen}/>
      <SVGSource/>
      <Header />
      <BrowserRouter>
        <MainLayout children={<Main />}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
