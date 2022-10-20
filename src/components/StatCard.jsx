import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { StatCardSubtitle, StatCardTitle, StatCardWrapper } from '../styles/StatCard.styled';

const StatCard = ({ title, subtitle}) => {
	const theme = useContext(ThemeContext);

	const COLOR_PRIMARY_MAIN = theme?.palette.primary.main;
	const COLOR_TEXT_PRIMARY = theme?.palette.text.primary;
  const COLOR_GREY_500 = theme?.palette.grey[500];

	return (
		<StatCardWrapper borderColor={COLOR_GREY_500} hoverColor={COLOR_PRIMARY_MAIN}>
			<StatCardTitle color={COLOR_PRIMARY_MAIN}>{title}</StatCardTitle>
			<StatCardSubtitle color={COLOR_TEXT_PRIMARY} bulletColor={COLOR_TEXT_PRIMARY}>
				{subtitle}
			</StatCardSubtitle>
		</StatCardWrapper>
	);
};

export default StatCard;
