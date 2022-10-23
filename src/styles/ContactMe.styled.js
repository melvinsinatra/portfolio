import styled from 'styled-components';

export const PrimaryContainer = styled.div`
	display: flex;
  flex-direction: ${({ flexDir }) => flexDir};
	column-gap: ${({ colGap }) => colGap};
	row-gap: ${({ rowGap }) => rowGap};
  padding: ${({ p }) => p};
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