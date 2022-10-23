import React, { useContext } from 'react';
import { FaBook } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';
import {
	Description,
	TimelineCardContainer,
	TimelineDetailsContainer,
	IconContainer,
	IconWrapper,
	Subtitle,
	Period,
	PeriodWrapper,
	Title
} from '../styles/TimelineCard.styled';

const TimelineCard = ({ period, title, subtitle, description }) => {
	const theme = useContext(ThemeContext);
	const COLOR_PRIMARY_MAIN = theme?.palette.primary.main;
	const COLOR_COMMON_WHITE = theme?.palette.common.white;
	const COLOR_GREY_500 = theme?.palette.grey[500];
	const COLOR_TEXT_PRIMARY = theme?.palette.text.primary;
	const COLOR_TEXT_ACCENT = theme?.palette.text.accent;

	return (
		<TimelineCardContainer>
			<IconContainer lineColor={COLOR_GREY_500}>
				<IconWrapper bgColor={COLOR_PRIMARY_MAIN} color={COLOR_COMMON_WHITE}>
					<FaBook className="icon--sm" />
				</IconWrapper>
			</IconContainer>
			<TimelineDetailsContainer>
				<PeriodWrapper>
					<Period bgColor={COLOR_GREY_500} color={COLOR_COMMON_WHITE}>{period}</Period>
				</PeriodWrapper>
				<Title color={COLOR_TEXT_PRIMARY}>
					{title}<Subtitle color={COLOR_TEXT_ACCENT}> - {subtitle}</Subtitle>
				</Title>
				<Description color={COLOR_TEXT_ACCENT}>
					{description}
				</Description>
			</TimelineDetailsContainer>
		</TimelineCardContainer>
	);
};

export default TimelineCard;
