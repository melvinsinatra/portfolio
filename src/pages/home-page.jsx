import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';

import Image from '../assets/hero.png';
import {
	EmphasizedText,
	HeroBodyText,
	HeroHeading,
	HeroImage,
	HeroTextWrapper,
	HomePageContainer,
	PrimaryContainer,
	SecondaryContainer
} from '../styles/HomePage.styled';
import { ClipPath, ImageWrapper } from './../styles/HomePage.styled';
import DownloadCVButton from './../components/DownloadCVButton';

const HomePage = () => {
	const theme = useContext(ThemeContext);

	const COLOR_PRIMARY_MAIN = theme.palette.primary.main;
	const COLOR_TEXT_PRIMARY = theme.palette.text.primary
	const isMobile = window.innerWidth < theme.breakpoints.values.md;

	return (
		<HomePageContainer flexDirection={!isMobile ? 'row' : 'column'}>
			{!isMobile && <ClipPath bg={COLOR_PRIMARY_MAIN}></ClipPath>}
			<PrimaryContainer className="animate__animated animate__slideInLeft" isMobile={isMobile}>
				<ImageWrapper bg="#000">
					<HeroImage src={Image} alt="Hero Image" />
				</ImageWrapper>
			</PrimaryContainer>
			<SecondaryContainer>
				<HeroTextWrapper>
					<HeroHeading className="animate__animated animate__slideInDown" color={COLOR_TEXT_PRIMARY}>
						Hi, i'm <EmphasizedText color={COLOR_PRIMARY_MAIN}>Melvin Sinatra</EmphasizedText>.<br />Tech and Development
						<br /> Enthusiast, and An
						<br /> <EmphasizedText color={COLOR_PRIMARY_MAIN}>Aspiring Software Engineer</EmphasizedText>
					</HeroHeading>
					<HeroBodyText className="animate__animated animate__slideInDown" color={COLOR_TEXT_PRIMARY}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque aspernatur ipsa, soluta id suscipit dolorum provident quibusdam
						asperiores, optio debitis obcaecati adipisci atque repellat.
					</HeroBodyText>
          <DownloadCVButton/>
				</HeroTextWrapper>
			</SecondaryContainer>
		</HomePageContainer>
	);
};

export default HomePage;
