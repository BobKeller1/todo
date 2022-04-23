import React, {FC} from 'react';
import TodoItem from "../TodoItem";
import {ITodoItem} from "../../store/reducers/TodosReducer";

interface ITodosList {
  todos: ITodoItem[]
}

const TodoList: FC<ITodosList> = ({todos}) => {
  const todosElements = todos.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} />
  })

  return (
    <>
      {todosElements}
    </>
  );
};

export default TodoList;
