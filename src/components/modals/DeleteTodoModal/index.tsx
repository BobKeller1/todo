import React, {FC} from 'react';
import {ButtonWrapper, ModalOverlay, ModalWrapper} from "./styled";
import {useAppDispatch, useAppSelector} from "../../../store/hooks/redux";
import {TodosSlice} from "../../../store/reducers/TodosReducer";
import {batch} from "react-redux";

interface IModal {
  isModalOpen: boolean
}

const DeleteTodoModal: FC<IModal> = ({isModalOpen}) => {
  const dispatch = useAppDispatch()
  const {removeTodo, setModalClose} = TodosSlice.actions
  const {deletingTodoId} = useAppSelector((state) => state.TodosReducer)
  return (
    <>
    {
      isModalOpen &&
    <ModalOverlay>
      <ModalWrapper>
        <p>Вы действительно хотите удалить эту задачу?</p>
        <ButtonWrapper>
          <button onClick={()=> {
            batch(()=>{
              dispatch(setModalClose())
              dispatch(removeTodo(deletingTodoId))
            })

          }}>Да</button>
          <button onClick={() => dispatch(setModalClose())}>Нет</button>
        </ButtonWrapper>
      </ModalWrapper>
    </ModalOverlay>
    }
    </>
  );
};

export default DeleteTodoModal;
