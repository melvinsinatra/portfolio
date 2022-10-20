import styled from 'styled-components';

export const TimelineCardContainer = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 2em;
`;

export const IconContainer = styled.div`
	position: relative;
`;

export const IconWrapper = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	background-color: ${({ bgColor }) => bgColor};
	color: ${({ color }) => color};
	width: 55px;
	height: 55px;
	border-radius: 50%;
	z-index: 50;

	&::before {
		content: '';
		margin: 0 auto;
		position: absolute;
		background-color: ${({ lineColor }) => lineColor};
		height: 185px;
		width: 1px;
		top: 100%;
		left: 0;
		right: 0;
	}
`;

export const TimelineDetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 240px;
`;

export const PeriodWrapper = styled.div`
	display: inline-block;
`;

export const Period = styled.span`
	font-size: 0.8rem;
	color: ${({ color }) => color};
	background-color: ${({ bgColor }) => bgColor};
	padding: 0.5em 1.5em;
	border-radius: 25px;
`;

export const Title = styled.p`
	font-size: 1.3rem;
	font-weight: 700;
	color: ${({ color }) => color};
	text-transform: uppercase;
`;

export const Subtitle = styled.span`
	font-size: inherit;
	font-weight: 400;
	color: ${({ color }) => color};
	text-transform: uppercase;
`;

export const Description = styled.p`
	font-size: 1.1rem;
	font-weight: 400;
	color: ${({ color }) => color};
	margin: 0;
	flex: 1;
`;
