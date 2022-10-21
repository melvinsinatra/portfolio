import styled from 'styled-components'

export const PageContainer = styled.div`
	display: flex;
	flex-direction: ${({ flexDirection }) => flexDirection};
	position: relative;
	width: 100%;
	min-height: 100vh;
	max-width: 1600px;
	margin: 0 auto;
	row-gap: ${({ rowGap }) => rowGap || 0};
	padding-bottom: ${({pB}) => pB || 0};
`;

export const Flex = styled.div`
	display: flex;
	flex-direction: ${({ flexDir }) => flexDir || 'row'};
	align-items: ${({alignItems}) => alignItems || 'stretch'};
	justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
	row-gap: ${({ rowGap }) => rowGap};
	column-gap: ${({ colGap }) => colGap};
`

export const Wrapper = styled.div`
	background-color: ${({bgColor}) => bgColor};
	color: ${({color}) => color};
`