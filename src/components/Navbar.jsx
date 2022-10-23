import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import NavIconButton from './NavIconButton';
import { FaBook, FaEnvelope, FaHome, FaUserAlt } from 'react-icons/fa';

const NavbarContainer = styled.div`
	background-color: ${({ bgColor }) => bgColor};
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	padding: ${({ isMobile }) => (isMobile ? '1em 0' : '1em')};
	flex-direction: ${({ isMobile }) => (isMobile ? 'row' : 'column')};
	row-gap: ${({ isMobile }) => (isMobile ? 0 : '1em')};
	column-gap: ${({ isMobile }) => (isMobile ? '.75em' : 0)};
	top: ${({ isMobile }) => !isMobile && 0};
	left: ${({ isMobile }) => isMobile && 0};
	right: 0;
	bottom: 0;
	z-index: 500;
	top: ${({ isMobile }) => !isMobile && 0};
	left: ${({ isMobile }) => isMobile && 0};
`;

const Navbar = () => {
	const theme = useContext(ThemeContext);
	const isMobile = window.innerWidth < theme?.breakpoints.values.md;
	const COLOR_BACKGROUND_DEFAULT = theme?.palette.background.default;

	return (
		<NavbarContainer isMobile={isMobile} bgColor={COLOR_BACKGROUND_DEFAULT}>
			<NavIconButton to="/">
				<FaHome className="icon--sm" />
			</NavIconButton>
			<NavIconButton to="/about-me">
				<FaUserAlt className="icon--sm" />
			</NavIconButton>
			<NavIconButton to="/my-portfolio">
				<FaBook className="icon--sm" />
			</NavIconButton>
			<NavIconButton to="/contact-me">
				<FaEnvelope className="icon--sm" />
			</NavIconButton>
		</NavbarContainer>
	);
};

export default Navbar;
