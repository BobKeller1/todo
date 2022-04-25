import React, {useEffect, useState} from 'react';
import Select from 'react-dropdown-select';
import styled from "styled-components";
import TodoList from "../../components/TodoList";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {ITodoItem, TodosSlice} from "../../store/reducers/TodosReducer";
import {batch} from "react-redux";
import usePagination from "../../store/hooks/UsePagination";


const TodosWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const TodosPage = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {setModalOpen, setDeletingTodoId, setActiveFilter} = TodosSlice.actions
  const todos = useAppSelector((state) => state.TodosReducer.Todos)
  const {activeFilter} = useAppSelector((state) => state.TodosReducer)
  const [filtredTodos, setFiltredTodos] = useState<ITodoItem[]>([])
  const openModalToDelete = (id: string) => {
    batch(() =>{
      dispatch(setModalOpen())
      dispatch((setDeletingTodoId(id)))
    })

  }
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 15,
    count: filtredTodos.length,
  });


  const filters = [
    { value: 'Date', label: 'По дате' },
    { value: 'Title', label: 'По заголовку' },
    { value: 'Completed', label: 'По выполненным' },
    { value: 'NotCompleted', label: 'По не выполненным' },
    { value: 'Without', label: 'Без фильтра' }
  ]


  function SortArray(prevTodo:ITodoItem, nexTodo:ITodoItem){
    return prevTodo?.title.localeCompare(nexTodo?.title)
  }

  const filterTodoHandler = (filter: string) =>{
    const todosCopy = todos.slice()
    let filtredTodos
    switch (filter){
      case "Title":
        todosCopy.sort(SortArray)
        setFiltredTodos(todosCopy)
        break
      case "Without":
        setFiltredTodos(todos)
        break
      case "Date":
        todosCopy.sort((a: ITodoItem, b:ITodoItem) => {
          const prevTodo = new Date(a.expDate)
          const nextTodo = new Date(b.expDate)
          return Number(prevTodo) - Number(nextTodo)
        })
        setFiltredTodos(todosCopy)
        break
      case "Completed":
        filtredTodos = todos.filter((todo) => todo.isCompleted === true)
        setFiltredTodos(filtredTodos)
        break
      case "NotCompleted":
        filtredTodos = todos.filter((todo) => todo.isCompleted === false)
        setFiltredTodos(filtredTodos)
        break
      default:
        setFiltredTodos(todos)
    }
  }

  useEffect(() => {
    filterTodoHandler(activeFilter)
    }, [activeFilter, todos])

  return (
    <div>
      <div style={{display:"flex", justifyContent: "space-between", marginBottom: "20px"}}>
        <button onClick={() => navigate("/create")}>ADD TODO</button>
        <button onClick={() => navigate("/trashBasket")}>Trash</button>
      </div>
      <Select
        onChange={(value) => dispatch(setActiveFilter((value[0].value)))}
        values={[]}
        options={filters}
        placeholder={"Сортировать по..."}
      />
      <h1>Список задач:</h1>
      <TodosWrapper>
        <TodoList todos={filtredTodos} openModalToDelete={openModalToDelete} firstContentIndex={firstContentIndex} lastContentIndex={lastContentIndex}/>
        <div className="pagination">
          <p className="text">
            {page}/{totalPages}
          </p>
          <button onClick={prevPage} className="page">
            &larr;
          </button>
          {[...Array(totalPages).keys()].map((el) => (
            <button
              onClick={() => setPage(el + 1)}
              key={el}
              className={`page ${page === el + 1 ? "active" : ""}`}
            >
              {el + 1}
            </button>
          ))}
          <button onClick={nextPage} className="page">
            &rarr;
          </button>
        </div>
      </TodosWrapper>
      </div>
  );
};

export default TodosPage;
