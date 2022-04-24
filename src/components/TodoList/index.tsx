import React, {FC} from 'react';
import TodoItem from "../TodoItem";
import {ITodoItem} from "../../store/reducers/TodosReducer";

interface ITodosList {
  todos: ITodoItem[]
  openModalToDelete: (id: string)=> void
  firstContentIndex: number
  lastContentIndex: number
}

const TodoList: FC<ITodosList> = ({todos, openModalToDelete, firstContentIndex, lastContentIndex}) => {
  const todosElements = todos.slice(firstContentIndex, lastContentIndex).map((todo) => {
    return <TodoItem key={todo.id} todo={todo} openModalToDelete={openModalToDelete}/>
  })

  return (
    <>
      {todosElements}
      {todosElements.length < 15 && <p>Здесь заканчиваются задачи!</p>}
    </>
  );
};

export default TodoList;
