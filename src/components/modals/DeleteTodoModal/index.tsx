import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/hooks/redux";
import {TodosSlice} from "../../../store/reducers/TodosReducer";
import {batch} from "react-redux";
import Button from "react-bootstrap/Button";
import { Modal } from 'react-bootstrap';

interface IModal {
  isModalOpen: boolean
}

const DeleteTodoModal: FC<IModal> = ({isModalOpen}) => {
  const dispatch = useAppDispatch()
  const {removeTodo, setModalClose} = TodosSlice.actions
  const {deletingTodoId} = useAppSelector((state) => state.TodosReducer)
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
      Вы действительно хотите удалить эту задачу?
      </Modal.Body>
      <Modal.Footer>
      <Button variant="secondary">
      Нет
      </Button>
      <Button variant="primary" onClick={() => {
        batch(() =>{
          dispatch(removeTodo(deletingTodoId))
          dispatch(setModalClose())
        })
      }}>Да</Button>
      </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteTodoModal;
