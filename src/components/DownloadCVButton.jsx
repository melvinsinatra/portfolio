import React from 'react';
import { useContext } from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';
import { ButtonWrapper, StyledDownloadButton } from '../styles/HomePage.styled';
import { IconWrapper } from './../styles/HomePage.styled';

const DownloadCVButton = () => {
	const theme = useContext(ThemeContext);

	console.log(theme);

	const COLOR_PRIMARY_MAIN = theme.palette.primary.main;
	const COLOR_TEXT_PRIMARY = theme.palette.text.primary;
	const COLOR_TEXT_SECONDARY = theme.palette.text.secondary;
	const COLOR_WHITE = theme.palette.common.white;

	return (
		<ButtonWrapper className="animate__animated animate__slideInUp">
			<StyledDownloadButton primaryColor={COLOR_PRIMARY_MAIN} colorTextPrimary={COLOR_TEXT_PRIMARY} colorWhite={COLOR_WHITE}>
				Download CV
			</StyledDownloadButton>
			<IconWrapper bg={COLOR_PRIMARY_MAIN}>
				<FaCloudDownloadAlt color={COLOR_WHITE} className="icon--lg" />
			</IconWrapper>
		</ButtonWrapper>
	);
};

export default DownloadCVButton;
