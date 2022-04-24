import styled from "styled-components";

export const TodoItemWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 550px;
  height: 100px;
  display: flex;
  border: 1px solid black;
  border-radius: 8px;
  padding: 4px;
  margin-top: 15px;


  @media(max-width: 600px){
    margin: 0 auto;
    margin-top: 15px;
  }
`

export const TodoText = styled.p`
  font-size: 14px;
  padding: 0;
  margin: 0;
`

export const TodoTitle = styled(TodoText)`
  font-size: 18px;
`

export const TodoDescription = styled(TodoText)`
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;`

export const TodoDate = styled(TodoText)`
  width: 90%;
  position: absolute;
  bottom: 2px;
  left: 8px;
  display: flex;
  justify-content: space-between;
`
