import React from 'react';
import {Route, Routes} from "react-router-dom";
import TodosPage from "../TodosPage";
import EditTodoPage from "../EditTodoPage/EditTodoPage";
import CreateTodoPage from "../CreateTodoPage";
import TrashBasket from "../TrashBasketPage";

const Main = () => {
  return (
      <Routes>
        <Route path={"/"} element={<TodosPage/>}/>
        <Route path={"/:id/edit"} element={<EditTodoPage/>}/>
        <Route path={"/create"} element={<CreateTodoPage/>}/>
        <Route path={"/trashBasket"} element={<TrashBasket/>}/>
      </Routes>
  );
};

export default Main;
