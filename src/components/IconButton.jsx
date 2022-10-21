import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { StyledIconButton } from '../styles/IconButton.styled';

const IconButton = ({ href, target, children }) => {
	const theme = useContext(ThemeContext);
	const COLOR_GREY_400 = theme?.palette.grey[400];
	const COLOR_COMMON_WHITE = theme?.palette.common.white;

	return (
		<StyledIconButton href={href} target={target} bgGrey={COLOR_GREY_400} color={COLOR_COMMON_WHITE}>
			{children}
		</StyledIconButton>
	);
};

export default IconButton;
