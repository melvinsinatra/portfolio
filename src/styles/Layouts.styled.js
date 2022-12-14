import styled from 'styled-components';

export const PageContainer = styled.div`
	display: flex;
	flex-direction: ${({ flexDir }) => flexDir || 'column'};
	position: relative;
	width: 100%;
	min-height: 100vh;
	max-width: 1600px;
	margin: 0 auto;
	row-gap: ${({ rowGap }) => rowGap || 0};
	padding: ${({ p }) => p};
	padding-bottom: ${({ pB }) => pB || 0};
`;

export const Flex = styled.div`
	display: flex;
	flex-direction: ${({ flexDir }) => flexDir || 'row'};
	align-items: ${({ alignItems }) => alignItems || 'stretch'};
	justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
	row-gap: ${({ rowGap }) => rowGap};
	column-gap: ${({ colGap }) => colGap};
	flex: ${({ flex }) => flex || '0 1 auto'};
	padding-block: ${({ py }) => py || 0};
	width: ${({ width, fullWidth }) => (fullWidth && '100%') || width};
`;

export const Wrapper = styled.div`
	background-color: ${({ bgColor }) => bgColor};
	color: ${({ color }) => color};
	flex: ${({ flex }) => flex || '0 1 auto'};
`;