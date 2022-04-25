import styled from "styled-components";

export const TodoItemWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 550px;
  min-height: 100px;
  max-height: 400px;
  display: flex;
  border: 1px solid black;
  border-radius: 8px;
  padding: 4px;
  margin-top: 15px;
  transition: all ease-in-out 0.3s;

  &:hover{
    transform: translateY(-7px);
    box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;
  }


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
  max-height: 350px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  margin-bottom: 30px;
`

export const TodoDate = styled(TodoText)`
  width: 90%;
  position: absolute;
  bottom: 2px;
  left: 8px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
`
