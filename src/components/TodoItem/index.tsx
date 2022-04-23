import React, {FC} from 'react';
import {TodoDate, TodoDescription, TodoItemWrapper, TodoTitle} from "./styled";
import {SvgIcon} from "../Icons";
import {useNavigate} from "react-router-dom";
import {ITodoItem, TodosSlice} from "../../store/reducers/TodosReducer";
import {useAppDispatch} from "../../store/hooks/redux";

interface ITodoItemElement {
  todo: ITodoItem
}

const TodoItem: FC<ITodoItemElement> = ({todo}) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {removeTodo, setEditingTodo} = TodosSlice.actions
  const {title, description, expDate, createDate, id} = todo
  return (
      <TodoItemWrapper>
        <div style={{width: "100%"}}>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <TodoTitle>{title}</TodoTitle>
            <div>
              <button style={{border: 0, backgroundColor: "white"}} onClick={() => {
                dispatch(setEditingTodo(todo))
                navigate(`/${id}/edit`)
              }}><SvgIcon id={"icons-edit"}  /></button>
              <button style={{border: 0, backgroundColor: "white"}} onClick={() => dispatch(removeTodo(id))}><SvgIcon id={"icons-trash"} /></button>
            </div>
          </div>
          <TodoDescription>{description}</TodoDescription>
          <div>
            <TodoDate>{createDate} \ {expDate} </TodoDate>
          </div>
        </div>
      </TodoItemWrapper>
  );
};

export default TodoItem;
