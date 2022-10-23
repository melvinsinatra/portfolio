import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Description, ItemBar, PortfolioCardContainer, PortfolioCardImage, Text } from '../styles/PortfolioCard.styled';

import PlaceholderImage from '../assets/placeholder.jpg';
import { Flex } from '../styles/Layouts.styled';
import { FaExternalLinkAlt } from 'react-icons/fa';

const PortfolioCard = ({ thumbnail, title, description, link }) => {
	const theme = useContext(ThemeContext);
	const COLOR_COMMON_WHITE = theme?.palette.common.white;
	const COLOR_TEXT_PRIMARY = theme?.palette.text.primary;
	const COLOR_TEXT_ACCENT = theme?.palette.text.accent;
	const COLOR_GREY_200 = theme?.palette.grey[200];

	return (
		<PortfolioCardContainer>
			<PortfolioCardImage src={thumbnail} alt="Card Image" />
			<ItemBar color={COLOR_COMMON_WHITE}>
				<Flex flexDir="column" flex={1}>
					<Text>{title}</Text>
					<Description color={COLOR_GREY_200}>{description}</Description>
				</Flex>
				<Flex alignItems="center">
					<a href={link} target="_blank">
						<FaExternalLinkAlt className="icon--md" />
					</a>
				</Flex>
			</ItemBar>
		</PortfolioCardContainer>
	);
};

export default PortfolioCard;
