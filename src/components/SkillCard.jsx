import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { SkillCardContainer, SkillImage, SkillName } from '../styles/SkillCard.styled';

const SkillCard = ({ handleClick, cursorPointer, image, name, svgIcon, children }) => {
	const theme = useContext(ThemeContext);
	const COLOR_PRIMARY_MAIN = theme?.palette.primary.main;
	const COLOR_BACKGROUND_DEFAULT = theme?.palette.background.default;
	const COLOR_BACKGROUND_SECONDARY = theme?.palette.background.secondary;
	const COLOR_TEXT_PRIMARY = theme?.palette.text.primary;

	return svgIcon ? (
		<SkillCardContainer
			onClick={handleClick}
			cursorPointer={cursorPointer}
			hoverColor={COLOR_PRIMARY_MAIN}
			bgColor={COLOR_BACKGROUND_DEFAULT}
			borderColor={COLOR_BACKGROUND_SECONDARY}
			color={COLOR_TEXT_PRIMARY}
		>
			{children}
			<SkillName color={COLOR_TEXT_PRIMARY}>{name}</SkillName>
		</SkillCardContainer>
	) : (
		<SkillCardContainer
			onClick={handleClick}
			cursorPointer={cursorPointer}
			hoverColor={COLOR_PRIMARY_MAIN}
			bgColor={COLOR_BACKGROUND_DEFAULT}
			borderColor={COLOR_BACKGROUND_SECONDARY}
			color={COLOR_TEXT_PRIMARY}
		>
			<SkillImage src={image} alt="Skill Image" />
			<SkillName color={COLOR_TEXT_PRIMARY}>{name}</SkillName>
		</SkillCardContainer>
	);
};

export default SkillCard;
