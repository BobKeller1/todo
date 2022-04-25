import React, {FC} from 'react';
import {TodoDate, TodoDescription, TodoItemWrapper, TodoTitle} from "./styled";
import {SvgIcon} from "../Icons";
import {useNavigate} from "react-router-dom";
import {ITodoItem, TodosSlice} from "../../store/reducers/TodosReducer";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import "./style.css";
import {WrapperTodo} from "../../pages/TodosPage/styled";

interface ITodoItemElement {
  todo: ITodoItem
  openModalToDelete: (id: string)=> void

}

const TodoItem: FC<ITodoItemElement> = ({todo, openModalToDelete}) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.TodosReducer.Todos)
  const {setEditingTodo, setTodoCompleted} = TodosSlice.actions
  const {title, description, expDate, createDate, id, isCompleted} = todo

  const setCompleted = (currentTodo: ITodoItem) => {
    const index = todos.findIndex((todo) => todo.id === currentTodo.id)
    dispatch(setTodoCompleted(index))
  }

  return (
    <WrapperTodo>
      <input
        style={{width: "30px"}}
        type={"checkbox"}
        checked={isCompleted}
        onChange={() => setCompleted(todo)}/>
      <TodoItemWrapper className={isCompleted ?"completed": ""}>
        <div style={{width: "100%"}}>
          <div style={{display: "flex", justifyContent: "space-between", minHeight: "29px"}}>
            <TodoTitle>{title}</TodoTitle>
            {!isCompleted &&  <div>
              <button style={{border: 0, backgroundColor: "white"}} onClick={() => {
                dispatch(setEditingTodo(todo))
                navigate(`/${id}/edit`)
              }}><SvgIcon id={"icons-edit"}  /></button>
              <button
                style={{border: 0, backgroundColor: "white"}}
                onClick={() => openModalToDelete(id)}><SvgIcon
                id={"icons-trash"} /></button>
            </div> }
          </div>
          <TodoDescription>{description}</TodoDescription>
          <div>
            <TodoDate>
              <span> Дата создания: {new Date(+createDate).toLocaleString('ru-RU',
                {  day: "numeric",
                  month: 'short',
                  year: "numeric" })}</span>
              <span> Дата окончания: {new Date(expDate || Date.now()).toLocaleString('ru-RU',
                {  day: "numeric",
                  month: 'short',
                  year: "numeric" })}</span> </TodoDate>
          </div>
        </div>
      </TodoItemWrapper>
    </WrapperTodo>
  );
};

export default TodoItem;
