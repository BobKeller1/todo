import styled from "styled-components";

export const InputTitle = styled.input`
  width: 100%;
  max-width: 500px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 5px;
`

export const InputDescription = styled.textarea`
  width: 100%;
  max-width: 500px;
  height: 100%;
  min-height: 300px;
  max-height: 400px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 5px;
  resize: none;
`

export const CreateTodoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Label = styled.label`
  margin-bottom: 10px;
`

export const ButtonBackWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
