import styled from 'styled-components';

export const PrimaryContainer = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
	z-index: 100;
`;

export const ImageWrapper = styled.div`
	background-color: ${({ bg }) => bg};
	border-radius: 25px;
	width: 81%;
	height: 95%;
`;

export const HeroImage = styled.img`
	width: 100%;
	height: 100%;
	filter: saturate(0);
	object-fit: cover;

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
`;

export const HeroHeading = styled.h1`
	margin: 0;
	font-size: 3rem;
	font-weight: 700;
	color: ${({ color }) => color};
`;

export const HeroBodyText = styled.p`
	font-size: 1.1rem;
	font-weight: 700;
	line-height: auto;
	color: ${({ color }) => color || 'inherit'};
	font-family: Poppins, sans-serif;
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
