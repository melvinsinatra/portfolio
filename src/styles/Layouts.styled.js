import styled from 'styled-components'

export const PageContainer = styled.div`
	display: flex;
	flex-direction: ${({ flexDirection }) => flexDirection};
	position: relative;
	width: 100%;
	max-width: 1600px;
	margin: 0 auto;
	row-gap: ${({ rowGap }) => rowGap || 0};
	padding-bottom: ${({pB}) => pB || 0};
`;