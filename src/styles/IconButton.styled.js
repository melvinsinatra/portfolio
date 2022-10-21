import styled from 'styled-components';

export const StyledNavIconButton = styled.button`
	width: 52px;
	height: 52px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 50%;
	background-color: ${({ isActive, bgMain, bgGrey }) => (isActive ? bgMain : bgGrey)};
	color: ${({ color }) => color};
	cursor: pointer;
	border: none;
	overflow: hidden;
	z-index: 500;

	&:hover {
		opacity: 0.6
	}
`;

export const StyledIconButton = styled.a`
	width: 52px;
	height: 52px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 50%;
	background-color: ${({ bgGrey }) => bgGrey};
	color: ${({ color }) => color};
	cursor: pointer;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;

	&:hover {
		opacity: 0.6
	}
`;
