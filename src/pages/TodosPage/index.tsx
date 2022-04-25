import React, {FC, useEffect, useState} from 'react';
import Select from 'react-dropdown-select';
import TodoList from "../../components/TodoList";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {ITodoItem, TodosSlice} from "../../store/reducers/TodosReducer";
import usePagination from "../../store/hooks/UsePagination";
import Button from 'react-bootstrap/Button';
import "./style.css"


interface ITodosPage {
  openModalToDelete(todo:ITodoItem): void
}

const TodosPage: FC<ITodosPage> = ({openModalToDelete}) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {setActiveFilter} = TodosSlice.actions
  const todos = useAppSelector((state) => state.TodosReducer.Todos)
  const {activeFilter} = useAppSelector((state) => state.TodosReducer)
  const [filtredTodos, setFiltredTodos] = useState<ITodoItem[]>([])

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
    { value: 'NotCompleted', label: 'По невыполненным' },
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
        <Button variant="primary" onClick={() => navigate("/create")}>Add Todo</Button>
        <Button variant="danger" onClick={() => navigate("/trashBasket")}>Trash Basket</Button>
      </div>
      <Select
        onChange={(value) => dispatch(setActiveFilter((value[0].value)))}
        values={[]}
        options={filters}
        placeholder={"Сортировать по..."}
        style={{maxWidth:"360px", marginBottom: "15px"}}
      />
      {todos.length != 0 && <h1>Список задач:</h1>}

        <TodoList
          todos={filtredTodos}
          openModalToDelete={openModalToDelete}
          firstContentIndex={firstContentIndex}
          lastContentIndex={lastContentIndex}/>

      {todos.length === 0 &&
        <h2 style={{maxWidth:"600px", margin: "0 auto"}}>Вы не создали еще ни одной задачи, скорее начните!</h2>}

      { filtredTodos.length >= 1 &&
        <div className="pagination">
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
      }

      </div>
  );
};

export default TodosPage;
