import React from 'react';
import {TodoDate, TodoDescription, TodoItemWrapper, TodoTitle} from "./styled";
import {SvgIcon} from "../Icons";
import {useNavigate} from "react-router-dom";

const TodoItem = () => {
  const navigate = useNavigate()
  return (
      <TodoItemWrapper>
        <div style={{width: "100%"}}>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <TodoTitle>Название туду</TodoTitle>
            <div>
              <button style={{border: 0, backgroundColor: "white"}} onClick={() => navigate(`/${1}/edit`)}><SvgIcon id={"icons-edit"}  /></button>
              <SvgIcon id={"icons-trash"} />
            </div>
          </div>
          <TodoDescription>Описание туду</TodoDescription>
          <div>
            <TodoDate>дата создания \ дата окнчания</TodoDate>
          </div>
        </div>
      </TodoItemWrapper>
  );
};

export default TodoItem;
