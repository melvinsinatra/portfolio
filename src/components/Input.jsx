import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { StyledInput, StyledTextArea } from '../styles/Input.styled';

const Input = ({ name, placeholder, type, flex }) => {
	const theme = useContext(ThemeContext);
	const COLOR_BACKGROUND_SECONDARY = theme?.palette.background.secondary;
	const COLOR_TEXT_PRIMARY = theme?.palette.text.primary;

  const uppercasePlaceholder = placeholder.toUpperCase();

	return type === 'textarea' ? (
		<StyledTextArea rows={10} maxLength={500} flex={flex} placeholder={uppercasePlaceholder} required name={name} bgColor={COLOR_BACKGROUND_SECONDARY} color={COLOR_TEXT_PRIMARY} />
	) : (
		<StyledInput flex={flex} placeholder={uppercasePlaceholder} required type={type} name={name} bgColor={COLOR_BACKGROUND_SECONDARY} color={COLOR_TEXT_PRIMARY} />
	);
};

export default Input;
