import React, {FC} from 'react';
import {TodoDate, TodoDescription, TodoItemWrapper, TodoTitle} from "./styled";
import {SvgIcon} from "../Icons";
import {useNavigate} from "react-router-dom";
import {ITodoItem, TodosSlice} from "../../store/reducers/TodosReducer";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import "./style.css";

interface ITodoItemElement {
  todo: ITodoItem
}

const TodoItem: FC<ITodoItemElement> = ({todo}) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.TodosReducer.Todos)
  const {removeTodo, setEditingTodo, setTodoCompleted} = TodosSlice.actions
  const {title, description, expDate, createDate, id, isCompleted} = todo

  const setCompleted = (currentTodo: ITodoItem) => {
    const index = todos.findIndex((todo) => todo.id === currentTodo.id)
    dispatch(setTodoCompleted(index))
  }

  return (
    <div style={{width: "100%", maxWidth:" 560px", display: "flex", alignItems: "center"}}>
      <input style={{width: "30px"}} type={"checkbox"} checked={isCompleted} onChange={() => setCompleted(todo)}/>
      <TodoItemWrapper className={isCompleted ?"completed": ""}>
        <div style={{width: "100%"}}>
          <div style={{display: "flex", justifyContent: "space-between", minHeight: "29px"}}>
            <TodoTitle>{title}</TodoTitle>
            {!isCompleted &&  <div>
              <button style={{border: 0, backgroundColor: "white"}} onClick={() => {
                dispatch(setEditingTodo(todo))
                navigate(`/${id}/edit`)
              }}><SvgIcon id={"icons-edit"}  /></button>
              <button style={{border: 0, backgroundColor: "white"}} onClick={() => dispatch(removeTodo(id))}><SvgIcon id={"icons-trash"} /></button>
            </div> }
          </div>
          <TodoDescription>{description}</TodoDescription>
          <div>
            <TodoDate>{createDate} \ {expDate} </TodoDate>
          </div>
        </div>
      </TodoItemWrapper>
    </div>
  );
};

export default TodoItem;
