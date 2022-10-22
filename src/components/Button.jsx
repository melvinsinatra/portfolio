import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { ButtonWrapper, StyledButton, IconWrapper } from '../styles/Button.styled';

const Button = ({ Icon, className, children }) => {
	const theme = useContext(ThemeContext);

	const COLOR_PRIMARY_MAIN = theme.palette.primary.main;
	const COLOR_TEXT_PRIMARY = theme.palette.text.primary;
	const COLOR_TEXT_SECONDARY = theme.palette.text.secondary;
	const COLOR_WHITE = theme.palette.common.white;

	return (
		<ButtonWrapper className={className || ''}>
			<StyledButton primaryColor={COLOR_PRIMARY_MAIN} colorTextPrimary={COLOR_TEXT_PRIMARY} colorWhite={COLOR_WHITE}>
				{children}
			</StyledButton>
			<IconWrapper bg={COLOR_PRIMARY_MAIN}>
				<Icon color={COLOR_WHITE} className="icon--lg" />
			</IconWrapper>
		</ButtonWrapper>
	);
};

export default Button;
