import styled from "styled-components";

export const SkillCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid;
  border-color: ${({ borderColor }) => borderColor};
  color: ${({ color }) => color};
  padding-top: 2.625em;
  position: relative;

  &:hover {
    border-color: ${({ hoverColor }) => hoverColor};
    cursor: ${({ cursorPointer }) => cursorPointer ? 'pointer' : 'auto'};
  }
`

export const SkillImage = styled.img`
  object-fit: cover;
`

export const SkillName = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ color }) => color};
  position: absolute;
  bottom: 1em;
  left: 0;
  right: 0;
  margin: 0;
`