import React from 'react';
import Select from 'react-dropdown-select';
import styled from "styled-components";
import TodoList from "../../components/TodoList";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {TodosSlice} from "../../store/reducers/TodosReducer";
import {batch} from "react-redux";


const TodosWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const TodosPage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {setModalOpen, setDeletingTodoId} = TodosSlice.actions
  const todos = useAppSelector((state) => state.TodosReducer.Todos)

  const openModalToDelete = (id: string) => {
    batch(() =>{
      dispatch(setModalOpen())
      dispatch((setDeletingTodoId(id)))
    })

  }

  const options = [
    { value: 'Date', label: 'По дате' },
    { value: 'Title', label: 'По заголовку' },
    { value: 'Completed', label: 'По выполненным' },
    { value: 'NotCompleted', label: 'По не выполненным' }
  ]

  return (
    <div>
      <div style={{display:"flex", justifyContent: "space-between", marginBottom: "20px"}}>
        <button onClick={() => navigate("/create")}>ADD TODO</button>
        <button onClick={() => navigate("/trashBasket")}>Trash</button>
      </div>
      <Select
        onChange={() => console.log('click')}
        values={[]}
        options={options}
        placeholder={"Сортировать по..."}
      />
      <h1>Список задач:</h1>
      <TodosWrapper>
        <TodoList todos={todos} openModalToDelete={openModalToDelete}/>
      </TodosWrapper>
      </div>
  );
};

export default TodosPage;
