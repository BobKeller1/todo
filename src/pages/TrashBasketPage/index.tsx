import React, {FC} from 'react';
import {ButtonBackWrapper} from "../CreateTodoPage/styled";
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import TodoList from "../../components/TodoList";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import usePagination from "../../store/hooks/UsePagination";
import {ITodoItem} from "../../store/reducers/TodosReducer";
import {TodosSlice} from "../../store/reducers/TodosReducer";

interface ITrashBasket {
  openModalToDelete(todo:ITodoItem): void
}

const TrashBasket: FC<ITrashBasket> = ({openModalToDelete}) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const trash = useAppSelector((state) => state.TodosReducer.trashBasket)
  const {clearBasket} = TodosSlice.actions
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
    count: trash.length,
  });

  return (
    <div>
      <ButtonBackWrapper>
        <Button variant="outline-primary" onClick={() => navigate("/")}>Назад</Button>
        <Button variant="outline-danger" onClick={() => dispatch(clearBasket())}>Очистить</Button>
      </ButtonBackWrapper>
      {trash.length === 0 &&
        <h2 style={{maxWidth:"600px", margin: "0 auto"}}>Корзина пуста!</h2>}
      <TodoList
        todos={trash}
        openModalToDelete={openModalToDelete}
        firstContentIndex={firstContentIndex}
        lastContentIndex={lastContentIndex}/>
      { trash.length >= 1 &&
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

export default TrashBasket;
