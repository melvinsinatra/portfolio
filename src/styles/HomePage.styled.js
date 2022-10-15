import styled from 'styled-components';

export const HomePageContainer = styled.div`
	display: flex;
	flex-direction: ${({ flexDirection }) => flexDirection};
	position: relative;
	width: 100%;
	height: 100%;
	min-height: 100vh;
`;

export const PrimaryContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	z-index: 100;
`;

export const ImageWrapper = styled.div`
	background-color: ${({ bg }) => bg};
	border-radius: 25px;
	width: 68%;
	height: 90%;
`;

export const HeroImage = styled.img`
	width: 100%;
	height: 100%;
	filter: saturate(0);

	&:hover {
		filter: saturate(100%);
	}
`;

export const SecondaryContainer = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
	z-index: 100;
`;

export const HeroTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 75%;
`;

export const HeroHeading = styled.h1`
	margin: 0;
	font-size: 3rem;
	font-weight: 700;
	color: ${({ color }) => color};
`;

export const EmphasizedText = styled.span`
	font-size: inherit;
	font-weight: inherit;
	color: ${({ color }) => color};
`;

export const HeroBodyText = styled.p`
	font-size: 1.1rem;
	font-weight: 700;
	line-height: auto;
	color: ${({ color }) => color || 'inherit'};
	font-family: Poppins, sans-serif;
`;

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

export const ClipPath = styled.div`
	width: 65%;
	height: 100%;
	background-color: ${({ bg }) => bg};
	position: absolute;
	left: 0;
	top: 0;
	clip-path: polygon(0 0, 26% 0, 45% 100%, 0% 100%);
`;
