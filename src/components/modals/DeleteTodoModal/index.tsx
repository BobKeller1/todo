import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/hooks/redux";
import {TodosSlice} from "../../../store/reducers/TodosReducer";
import {batch} from "react-redux";
import Button from "react-bootstrap/Button";
import { Modal } from 'react-bootstrap';

interface IModal {
  isModalOpen: boolean
  modalMessage: string
}

const DeleteTodoModal: FC<IModal> = ({isModalOpen, modalMessage}) => {
  const dispatch = useAppDispatch()
  const {removeTodo,
    setModalClose,
    addItemToTrashBasket,
    deleteFromBasket,
    } = TodosSlice.actions
  const {deletingTodo} = useAppSelector((state) => state.TodosReducer)
  const deletingTodoCopy = {...deletingTodo, isInBasket: true}

  return (
    <>
      <Modal
      show={isModalOpen}
      onHide={() => dispatch(setModalClose())}
      backdrop="static"
      >
      <Modal.Header closeButton>
      <Modal.Title>Подтвердите действие</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modalMessage}
      </Modal.Body>
      <Modal.Footer>
      <Button variant="secondary">
      Нет
      </Button>
      <Button variant="primary" onClick={() => {
        batch(() =>{
          if(deletingTodo.isInBasket){
            dispatch(deleteFromBasket(deletingTodoCopy))
          } else {
            dispatch(addItemToTrashBasket(deletingTodoCopy))
            dispatch(removeTodo(deletingTodo))
          }
          dispatch(setModalClose())
        })
      }}>Да</Button>
      </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteTodoModal;
