import React from 'react';
import {ButtonBackWrapper} from "../CreateTodoPage/styled";
import {useNavigate} from "react-router-dom";

const EditTodoPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <ButtonBackWrapper>
        <button onClick={() => navigate("/")}>Назад</button>
      </ButtonBackWrapper>
    </div>
  );
};

export default EditTodoPage;
