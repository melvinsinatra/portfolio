import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
  opacity: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`

export const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const ModalContainer = styled.div`
  width: 75%;
  height: 90%;
  max-width: 3072px;
  border: 1px solid;
  border-color: ${({ borderColor }) => borderColor};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 16px;
  opacity: 1;
  position: absolute;
  top: 2em;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  padding: 1.5em;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5em;
`

export const CloseButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const CloseButton = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid;
  width: 40px;
  height: 40px;
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: ${({ borderColor}) => borderColor};
  color: ${({ color }) => color};
  font-family: 'Poppins', sans-serif;
  padding: .2em .6em;
  cursor: pointer;

  &:hover{
    opacity: 0.6;
  }
`

export const ModalBody = styled.div`
  flex: 50%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
  grid-auto-rows: 294px;
  overflow: auto;
`