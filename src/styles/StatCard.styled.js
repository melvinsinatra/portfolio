import styled from "styled-components";

export const StatCardWrapper = styled.div`
  display: flex;
  padding: 2em;
  flex-direction: column;
  border: 1px solid;
  border-color: ${({ borderColor }) => borderColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;

  &:hover {
    border-color: ${({ hoverColor }) => hoverColor};
  }
`

export const StatCardTitle = styled.h2`
  margin: 0;
  color: ${({ color }) => color};
  font-size: 2.25rem;
  font-weight: bold;
`

export const StatCardSubtitle = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${({ color }) => color};
  position: relative;
  padding-left: 2.25em;

  &::before {
    content: '';
    position: absolute;
    width: 1.1em;
    height: .125em;
    left: 0;
    top: .6em;
    background-color: ${({ bulletColor }) => bulletColor};
  }
`