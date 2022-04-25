import React, {FC} from 'react';
import TodoItem from "../TodoItem";
import {ITodoItem} from "../../store/reducers/TodosReducer";
import styled from "styled-components";

interface ITodosList {
  todos: ITodoItem[]
  openModalToDelete: (todo: ITodoItem)=> void
  firstContentIndex: number
  lastContentIndex: number
}

const TodosWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`

const TodoList: FC<ITodosList> = ({todos, openModalToDelete, firstContentIndex, lastContentIndex}) => {
  const todosElements = todos.slice(firstContentIndex, lastContentIndex).map((todo) => {
    return <TodoItem key={todo.id} todo={todo} openModalToDelete={openModalToDelete}/>
  })

  return (
    <>
      <TodosWrapper>
      {todosElements}
      </TodosWrapper>
      { todos.length > 15 && todosElements.length < 15 && <h3 style={{paddingLeft: "25px", marginTop: "10px"}}>Здесь заканчиваются Ваши задачи!</h3>}
    </>
  );
};

export default TodoList;
