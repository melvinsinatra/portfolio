import styled from "styled-components";

export const ButtonWrapper = styled.div`
	display: flex;
	align-self: flex-start;
	position: relative;
	cursor: pointer;
	margin-top: 1.5em;
`;

export const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	border-radius: 50%;
	background-color: ${({ bg }) => bg};
	padding: 1em;
`;

export const StyledDownloadButton = styled.button`
	font-size: 1.1rem;
	font-weight: 700;
	color: ${({ colorTextPrimary }) => colorTextPrimary || 'inherit'};
	font-family: Poppins, sans-serif;
	border: 1px solid;
	border-color: ${({ primaryColor }) => primaryColor};
	padding: 1em 6em 1em 3em;
	border-radius: 50px;
	background-color: transparent;
	align-self: flex-start;
	overflow: hidden;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		transform: translateX(100%);
		z-index: -1;
	}

	&:hover {
		cursor: pointer;
		color: ${({ colorWhite }) => colorWhite};
		&::before {
			content: '';
			width: 100%;
			height: 100%;
			background-color: ${({ primaryColor }) => primaryColor};
			transform: translateX(0);
		}
	}
`;