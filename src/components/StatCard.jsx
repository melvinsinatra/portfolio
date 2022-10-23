import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { StatCardSubtitle, StatCardTitle, StatCardWrapper } from '../styles/StatCard.styled';

const StatCard = ({ title, subtitle}) => {
	const theme = useContext(ThemeContext);
	const isMobile = window.innerWidth < theme?.breakpoints.values.md;
	const COLOR_PRIMARY_MAIN = theme?.palette.primary.main;
	const COLOR_TEXT_PRIMARY = theme?.palette.text.primary;
  const COLOR_BACKGROUND_SECONDARY= theme?.palette.background.secondary;

	return (
		<StatCardWrapper borderColor={COLOR_BACKGROUND_SECONDARY} hoverColor={COLOR_PRIMARY_MAIN} p={isMobile ? "1em" : "2em"}>
			<StatCardTitle color={COLOR_PRIMARY_MAIN}>{title}</StatCardTitle>
			<StatCardSubtitle color={COLOR_TEXT_PRIMARY} bulletColor={COLOR_TEXT_PRIMARY}>
				{subtitle}
			</StatCardSubtitle>
		</StatCardWrapper>
	);
};

export default StatCard;
