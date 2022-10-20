import styled from 'styled-components';

export const DarkBackgroundTitle = styled.h1`
	text-transform: uppercase;
	font-size: 6.25rem;
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
	font-size: 6.25rem;
	font-weight: 900;
  color: ${({ color }) => color};
	text-align: center;
	margin: .75em;
`;

export const EmphasizedText = styled.span`
	font-size: inherit;
	font-weight: inherit;
	color: ${({ color }) => color};
`;

export const SubHeading = styled.h3`
  margin: 0.4em 0;
  text-transform: uppercase;
  font-size: 2rem;
  color: inherit;
  font-weight: 700;
	color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign || 'start'};
`
export const BodyText = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: ${({ color }) => color};
  margin: 0;
`