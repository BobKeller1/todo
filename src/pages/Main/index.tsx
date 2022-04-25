import React from 'react';
import {Route, Routes} from "react-router-dom";
import TodosPage from "../TodosPage";
import EditTodoPage from "../EditTodoPage/EditTodoPage";
import CreateTodoPage from "../CreateTodoPage";
import TrashBasket from "../TrashBasketPage";
import {batch} from "react-redux";
import {ITodoItem, TodosSlice} from "../../store/reducers/TodosReducer";
import {useAppDispatch} from "../../store/hooks/redux";

const Main = () => {
  const dispatch = useAppDispatch()
  const {setModalOpen, setDeletingTodo} = TodosSlice.actions

  const openModalToDelete = (todo: ITodoItem) => {
    batch(() =>{
      dispatch(setModalOpen())
      dispatch((setDeletingTodo(todo)))
    })
  }

  return (
      <Routes>
        <Route path={"/"} element={<TodosPage openModalToDelete={openModalToDelete}/>}/>
        <Route path={"/:id/edit"} element={<EditTodoPage/>}/>
        <Route path={"/create"} element={<CreateTodoPage/>}/>
        <Route path={"/trashBasket"} element={<TrashBasket openModalToDelete={openModalToDelete}/>}/>
      </Routes>
  );
};

export default Main;
