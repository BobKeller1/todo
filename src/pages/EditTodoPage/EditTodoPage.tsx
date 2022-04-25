import React from 'react';
import {
  ButtonBackWrapper,
  CreateTodoWrapper,
  InputDescription,
  InputTitle,
  Label
} from "../CreateTodoPage/styled";
import {useNavigate} from "react-router-dom";
import UseInput from "../../store/hooks/UseInput";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {ITodoItem, TodosSlice} from "../../store/reducers/TodosReducer";
import Button from 'react-bootstrap/Button';

const EditTodoPage = () => {
  const todos = useAppSelector((state) => state.TodosReducer.Todos)
  const todo = useAppSelector((state) => state.TodosReducer.editingTodo)
  const {updateTodo} = TodosSlice.actions
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const title = UseInput(todo.title)
  const description = UseInput(todo.description)
  const expDate = UseInput(todo.expDate)
  const id = todo.id
  const createDate = todo.createDate
  const isCompleted = todo.isCompleted
  const isInBasket = todo.isInBasket

  const editedTodo: ITodoItem = {
    id,
    title: title.value,
    description: description.value,
    expDate: expDate.value,
    createDate,
    isCompleted,
    isInBasket
  }

  const update = (updatedTodo: ITodoItem) => {
    const index = todos.findIndex((oldTodo) => oldTodo.id === todo.id)
    dispatch(updateTodo({index, updatedTodo}))
    navigate("/")
  }

  return (
    <CreateTodoWrapper>
      <ButtonBackWrapper>
        <Button variant="outline-primary" onClick={() => navigate("/")}>Назад</Button>
      </ButtonBackWrapper>
      <Label>Заголовок задачи</Label>
      <InputTitle type={"text"}
                  placeholder={"Введите заголовок задачи"}
                  value={title.value}
                  onChange={(e) => title.onChange(e)}/>
      <Label>Описание задачи</Label>
      <InputDescription
        placeholder={"Введите описание задачи"}
        value={description.value}
        onChange={(e) => description.onChange(e)}/>
      <Label>Дата окончания задачи</Label>
      <InputTitle
        type={"date"}
        value={expDate.value}
        onChange={(e) => expDate.onChange(e)}/>
      <Button variant="success" onClick={() => {
        update(editedTodo)
        navigate("/")
      }}>Обновить задачу</Button>
    </CreateTodoWrapper>
  );
};

export default EditTodoPage;
