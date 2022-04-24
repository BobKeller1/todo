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

  return (
    <div >
      <div style={{display:"flex", justifyContent: "space-between", marginBottom: "20px"}}>
        <button onClick={() => navigate("/create")}>ADD TODO</button>
        <button onClick={() => navigate("/trashBasket")}>Trash</button>
      </div>
      <Select
        multi
        onChange={() => console.log('click')}
        values={[]}
        options={[]}
        style={{padding: "0 16px 0 16px"}}
        placeholder={"Filtered by..."}
      />
      <TodosWrapper>
        <TodoList todos={todos} openModalToDelete={openModalToDelete}/>
      </TodosWrapper>
      </div>
  );
};

export default TodosPage;
