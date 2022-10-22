import styled from 'styled-components';

export const PrimaryContainer = styled.div`
	display: flex;
	column-gap: 10%;
	width: 100%;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  flex: ${({flex}) => flex || '0 1 auto'};
  row-gap: ${({ rowGap }) => rowGap}
`