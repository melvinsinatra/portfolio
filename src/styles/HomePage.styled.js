import styled from 'styled-components';

export const PrimaryContainer = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
	z-index: 100;
`;

export const ImageWrapper = styled.div`
	background-color: ${({ bg }) => bg};
	background-image: ${({ bgImage }) => `url(${bgImage})`};
	background-size: cover;
	object-fit: cover;
	border-radius: ${({ isMobile }) => (isMobile ? '0px' : '25px')};
	width: ${({ isMobile }) => (isMobile ? '100vw' : '81%')};
	height: ${({ isMobile }) => (isMobile ? '45vh' : '95%')};
	z-index: -500;
`;

export const HeroImage = styled.img`
	width: 100%;
	height: 100%;
	filter: saturate(0);
	object-fit: contain;
	z-index: -500;

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
	font-size: clamp(1rem, 3vw + 1rem, 3rem);
	font-weight: 700;
	color: ${({ color }) => color};
	text-align: ${({ isMobile }) => isMobile && 'center'};
	padding-block: ${({ isMobile }) => isMobile && '5em'};
`;

export const HeroBodyText = styled.p`
	font-size: clamp(0.5rem, 0.75vw + 0.6rem, 1.1rem);
	font-weight: 700;
	line-height: auto;
	color: ${({ color }) => color || 'inherit'};
	font-family: Poppins, sans-serif;
	text-align: ${({ isMobile }) => isMobile && 'center'};
	padding-block: ${({ isMobile }) => isMobile && '5em'};
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
