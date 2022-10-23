import styled from "styled-components";

export const SkillCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid;
  border-color: ${({ borderColor }) => borderColor};
  color: ${({ color }) => color};
  padding-block: ${({ py }) => py};

  &:hover {
    border-color: ${({ hoverColor }) => hoverColor};
    cursor: ${({ cursorPointer }) => cursorPointer ? 'pointer' : 'auto'};
  }
`

export const SkillImage = styled.img`
  object-fit: cover;
  width: 52%:
  height: 52%;
  max-width: 155px;
  max-height: 175px;

`

export const SkillName = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-size: clamp(0.8rem, 1vw + 0.6rem, 1.5rem);
  font-weight: 700;
  color: ${({ color }) => color};
  bottom: 1em;
`