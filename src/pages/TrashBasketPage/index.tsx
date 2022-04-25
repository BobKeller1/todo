import React from 'react';
import {ButtonBackWrapper} from "../CreateTodoPage/styled";
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

const TrashBasket = () => {
  const navigate = useNavigate()
  return (
    <div>
      <ButtonBackWrapper>
        <Button variant="outline-primary" onClick={() => navigate("/")}>Назад</Button>
      </ButtonBackWrapper>
    </div>
  );
};

export default TrashBasket;
