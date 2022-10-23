import styled from 'styled-components';

export const DarkBackgroundTitle = styled.h1`
	text-transform: uppercase;
	font-size: clamp(2.5rem, 6.5vw + 1rem, 6.25rem);
	font-weight: 900;
	color: ${({ color }) => color};
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	text-align: center;
	margin: 0;
`;

export const PageTitle = styled.h1`
	text-transform: uppercase;
	font-size: clamp(2.5rem, 6.5vw + 1rem, 6.25rem);
	font-weight: 900;
	color: ${({ color }) => color};
	text-align: center;
	margin: 0.75em;
`;

export const PageSubTitle = styled.p`
	font-size: 1.5rem;
	font-weight: 700;
	color: ${({ color }) => color};
	text-align: center};
	margin: 0;
`;

export const EmphasizedText = styled.span`
	font-size: inherit;
	font-weight: inherit;
	color: ${({ color }) => color};
`;

export const SubHeading = styled.h3`
	margin: 0.4em 0;
	text-transform: uppercase;
	font-size: clamp(1rem, 1.5vw + 1rem, 2rem);
	color: inherit;
	font-weight: 700;
	color: ${({ color }) => color};
	text-align: ${({ textAlign }) => textAlign || 'start'};
`;

export const BodyText = styled.p`
	font-size: clamp(0.5rem, 0.75vw + 0.6rem, 1.1rem);
	font-weight: 400;
	color: ${({ color }) => color};
	margin: 0;
	flex: ${({ flex }) => flex || '0 1 auto'};
`;
