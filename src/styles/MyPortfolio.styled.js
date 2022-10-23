import styled from "styled-components";

export const PortfolioCardsContainer = styled.div`
  display: grid;
  gap: .5rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
  grid-auto-rows: 245px;
`