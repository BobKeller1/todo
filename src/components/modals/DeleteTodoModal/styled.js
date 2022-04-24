import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 100%;
  height:100vh;
  position: absolute;
  z-index: 999;
  background-color:rgba(0,0,0, 0.5);
  display: flex;
  justify-content: center;
`

export const ModalWrapper = styled.div`
  height: 150px;
  border-radius:8px;
  position:absolute;
  top: 35%;
  z-index: 1000;
  background-color: white;
  padding: 5px;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 100px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  transform: translate(-50%, -50%);
`
