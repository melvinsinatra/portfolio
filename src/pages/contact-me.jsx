import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { PageContainer } from '../styles/Layouts.styled';
import { DarkBackgroundTitle, EmphasizedText, PageTitle } from '../styles/Typographies.styled';

const ContactMe = () => {
	const theme = useContext(ThemeContext);
	const COLOR_GREY_500 = theme?.palette.grey[500];
	const COLOR_TEXT_PRIMARY = theme?.palette.text.primary;
	const COLOR_PRIMARY_MAIN = theme?.palette.primary.main;

	return (
		<>
			<DarkBackgroundTitle className="animate__animated animate__fadeIn" color={COLOR_GREY_500}>
				My
				<br />
				Information
			</DarkBackgroundTitle>
			<PageContainer className="animate__animated animate__fadeIn" flexDirection="column">
				<PageTitle color={COLOR_TEXT_PRIMARY}>
					<EmphasizedText color={COLOR_PRIMARY_MAIN}>Contact</EmphasizedText> Me
				</PageTitle>
			</PageContainer>
		</>
	);
};

export default ContactMe;
