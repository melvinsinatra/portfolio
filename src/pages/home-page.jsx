import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';

import Image from '../assets/hero.png';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { HeroBodyText, HeroHeading, HeroImage, HeroTextWrapper, PrimaryContainer, SecondaryContainer } from '../styles/HomePage.styled';
import { PageContainer } from '../styles/Layouts.styled';

import { ClipPath, ImageWrapper } from './../styles/HomePage.styled';
import { EmphasizedText } from './../styles/Typographies.styled';
import { Button } from '../components';

import CampusImage from '../assets/binus-bekasi-campus.jpg';

const HomePage = () => {
	const theme = useContext(ThemeContext);

	const COLOR_PRIMARY_MAIN = theme?.palette.primary.main;
	const COLOR_TEXT_PRIMARY = theme?.palette.text.primary;
	const isMobile = window.innerWidth < theme?.breakpoints.values.md;

	return (
		<>
			{!isMobile && <ClipPath bg={COLOR_PRIMARY_MAIN}></ClipPath>}
			<PageContainer flexDir={!isMobile ? 'row' : 'column'}>
				<PrimaryContainer className="animate__animated animate__slideInLeft" isMobile={isMobile}>
					<ImageWrapper bg="#000" bgImage={CampusImage} isMobile={isMobile}>
						<HeroImage src={Image} alt="Hero Image" />
					</ImageWrapper>
				</PrimaryContainer>
				<SecondaryContainer>
					<HeroTextWrapper>
						<HeroHeading className="animate__animated animate__slideInDown" isMobile={isMobile} color={COLOR_TEXT_PRIMARY}>
							Hi, i'm <EmphasizedText color={COLOR_PRIMARY_MAIN}>Melvin Sinatra</EmphasizedText>.<br />
							Tech and Development
							<br /> Enthusiast, and An
							<br /> <EmphasizedText color={COLOR_PRIMARY_MAIN}>Aspiring Software Engineer</EmphasizedText>
						</HeroHeading>
						<HeroBodyText className="animate__animated animate__slideInDown" isMobile={isMobile} color={COLOR_TEXT_PRIMARY}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque aspernatur ipsa, soluta id suscipit dolorum provident quibusdam
							asperiores, optio debitis obcaecati adipisci atque repellat.
						</HeroBodyText>
						<Button className={'animate__animated animate__slideInUp'} Icon={FaCloudDownloadAlt}>
							Download CV
						</Button>
					</HeroTextWrapper>
				</SecondaryContainer>
			</PageContainer>
		</>
	);
};

export default HomePage;
