import styled from 'styled-components';

export const StyledIconButton = styled.button`
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
`;
