import styled from 'styled-components';

export const StyledInput = styled.input`
	border: none;
	background-color: ${({ bgColor }) => bgColor};
	color: ${({ color }) => color};
	font-size: 1.1rem;
	font-weight: 400;
	font-family: inherit;
	border-radius: 12px;
	padding: 0.7em 1.5em;
	flex: ${({ flex }) => flex || '0 1 auto'};

	&:focus {
		outline: none;
	}
`;

export const StyledTextArea = styled.textarea`
	border: none;
	background-color: ${({ bgColor }) => bgColor};
	color: ${({ color }) => color};
	font-size: 1.1rem;
	font-weight: 400;
	font-family: inherit;
	border-radius: 12px;
	padding: 0.7em 1.5em;
	flex: ${({ flex }) => flex || '0 1 auto'};
  resize: none;

	&:focus {
		outline: none;
	}
`;
