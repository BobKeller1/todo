import React, {useEffect, useId, useState} from 'react';
import UseInput from "../../store/hooks/UseInput";
import {useNavigate} from "react-router-dom";
import {ButtonBackWrapper, CreateTodoWrapper, InputDescription, InputTitle, Label} from "./styled";
import {ITodoItem} from "../../store/reducers/TodosReducer";
import {TodosSlice} from "../../store/reducers/TodosReducer";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import Button from "react-bootstrap/Button";



interface ICreateTodo {
  (todo: ITodoItem): void
}

const CreateTodoPage = () => {
  const navigate = useNavigate()
  const todos = useAppSelector((state) => state.TodosReducer.Todos)
  const title = UseInput("")
  const description = UseInput("")
  const expDate = UseInput("")
  const [id, setId] = useState("")
  const dispatch = useAppDispatch()
  const {addTodo} = TodosSlice.actions

  const todo: ITodoItem = {
    id,
    title: title.value,
    description: description.value,
    expDate: expDate.value || Date.now(),
    createDate: Date.now().toString(),
    isCompleted: false,
    isInBasket: false
  }

  const test = new Date(expDate.value).toLocaleString('ru-RU', {  day: "numeric", month: 'short', year: "numeric" })

  console.log(test)

  const resetFields = () => {
    title.resetField()
    description.resetField()
    expDate.resetField()
  }

  const createTodo: ICreateTodo = (todo) => {
      dispatch(addTodo(todo))
      resetFields()
  }

  useEffect(() => {
    setId(Math.random().toString())
  }, [todos])

  return (
    <CreateTodoWrapper>
      <ButtonBackWrapper>
        <Button variant="outline-primary" onClick={() => navigate("/")}>Назад</Button>
      </ButtonBackWrapper>
      <Label>Заголовок задачи</Label>
      <InputTitle type={"text"} placeholder={"Введите заголовок задачи"} value={title.value} onChange={(e) => title.onChange(e)}/>
      <Label>Описание задачи</Label>
      <InputDescription  placeholder={"Введите описание задачи"} value={description.value} onChange={(e) => description.onChange(e)}/>
      <Label>Дата окончания задачи</Label>
      <InputTitle type={"date"} value={expDate.value} onChange={(e) => expDate.onChange(e)}/>
      <Button variant="success" onClick={() => {
        createTodo(todo)
      }}>Добавить задачу</Button>
    </CreateTodoWrapper>
  );
};

export default CreateTodoPage;
