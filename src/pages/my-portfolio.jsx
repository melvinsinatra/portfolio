import React, { useContext } from 'react';
import { DarkBackgroundTitle, EmphasizedText, PageSubTitle, PageTitle } from './../styles/Typographies.styled';
import { PageContainer } from './../styles/Layouts.styled';
import { ThemeContext } from '../contexts/ThemeContext';
import { PortfolioCardsContainer } from '../styles/MyPortfolio.styled';
import PortfolioCard from '../components/PortfolioCard';
import { projects } from './../utils/constants';

const MyPortfolio = () => {

  const theme = useContext(ThemeContext);
	const isMobile = window.innerWidth < theme?.breakpoints.values.md;
  const COLOR_TEXT_PRIMARY = theme?.palette.text.primary;
  const COLOR_TEXT_TERTIARY = theme?.palette.text.tertiary;
  const COLOR_PRIMARY_MAIN = theme?.palette.primary.main;

	const portfolioCardEls = projects.map((item, index) => (
		<PortfolioCard
			key={index}
			thumbnail={item.thumbnail}
			title={item.title}
			description={item.description}
			link={item.link}
		/>
	))

	return (
		<>
			<DarkBackgroundTitle className="animate__animated animate__fadeIn" color={COLOR_TEXT_TERTIARY}>
				My
				<br />
				Work
			</DarkBackgroundTitle>
			<PageContainer className="animate__animated animate__fadeIn" pB={isMobile && '6em'} flexDirection="column" rowGap="2em">
				{/**
				 * Page Title
				 */}
				<PageTitle color={COLOR_TEXT_PRIMARY}>
					My
					<EmphasizedText color={COLOR_PRIMARY_MAIN}> Portfolio</EmphasizedText>
				</PageTitle>
        <PageSubTitle color={COLOR_TEXT_PRIMARY}>Here are some of my projects that I’ve done throughout my studies</PageSubTitle>
         <PortfolioCardsContainer>
					{portfolioCardEls}
         </PortfolioCardsContainer>
      </PageContainer>
		</>
	);
};

export default MyPortfolio;
