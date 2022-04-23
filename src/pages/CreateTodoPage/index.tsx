import React from 'react';
import UseInput from "../../store/hooks/UseInput";
import {useNavigate} from "react-router-dom";
import {ButtonBackWrapper, CreateTodoWrapper, InputDescription, InputTitle, Label} from "./styled";



const CreateTodoPage = () => {
  const navigate = useNavigate()
  const title = UseInput("")
  const description = UseInput("")
  const expDate = UseInput("")

  const todo = {
    title: title.value,
    description: description.value,
    expDate: expDate.value,
    createDate: Date.now()
  }

  return (
    <CreateTodoWrapper>
      <ButtonBackWrapper>
        <button onClick={() => navigate("/")}>Назад</button>
      </ButtonBackWrapper>
      <Label>Заголовок задачи</Label>
      <InputTitle type={"text"} placeholder={"Введите заголовок задачи"} value={title.value} onChange={(e) => title.onChange(e)}/>
      <Label>Описание задачи</Label>
      <InputDescription  placeholder={"Введите описание задачи"} value={description.value} onChange={(e) => description.onChange(e)}/>
      <Label>Дата окончания задачи</Label>
      <InputTitle type={"date"} value={expDate.value} onChange={(e) => expDate.onChange(e)}/>
      <button>Добавить задачу</button>
    </CreateTodoWrapper>
  );
};

export default CreateTodoPage;
