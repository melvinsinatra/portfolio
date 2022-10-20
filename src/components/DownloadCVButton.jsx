import React from 'react';
import { useContext } from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';
import { ButtonWrapper, StyledDownloadButton, IconWrapper } from '../styles/DownloadCVButton.styled';

const DownloadCVButton = ({ className }) => {
	const theme = useContext(ThemeContext);

	console.log(theme);

	const COLOR_PRIMARY_MAIN = theme.palette.primary.main;
	const COLOR_TEXT_PRIMARY = theme.palette.text.primary;
	const COLOR_TEXT_SECONDARY = theme.palette.text.secondary;
	const COLOR_WHITE = theme.palette.common.white;

	return (
		<ButtonWrapper className={className || ''}>
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
