import styled from "styled-components";

export const PortfolioCardContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`

export const PortfolioCardImage = styled.img`
  width: 100%;
  object-fit: cover;
`

export const ItemBar = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  color: ${({ color }) => color};
  padding: .5em 1.2em;
  display: none;
  flex-direction: row;
  position: absolute;
  z-index: 500;
  bottom: 0;
  left:0;
  right: 0;
  min-height: 30%;
  max-height: 45%;

  ${PortfolioCardContainer}:hover & {
    display: flex;
    column-gap: 1em;
  }
`

export const Text = styled.p`
  font-size: 1rem;
  color: ${({ color }) => color};
  font-weight: 400;
`

export const Description = styled.p`
  font-size: 0.75rem;
  color: ${({ color }) => color};
  font-weight: 400;
`