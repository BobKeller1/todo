import React, {FC} from 'react';
import TodoItem from "../TodoItem";
import {ITodoItem} from "../../store/reducers/TodosReducer";

interface ITodosList {
  todos: ITodoItem[]
  openModalToDelete: (id: string)=> void
}

const TodoList: FC<ITodosList> = ({todos, openModalToDelete}) => {
  const todosElements = todos.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} openModalToDelete={openModalToDelete}/>
  })

  return (
    <>
      {todosElements}
    </>
  );
};

export default TodoList;
