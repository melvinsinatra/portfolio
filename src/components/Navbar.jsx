import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import IconButton from './IconButton';
import { FaBook, FaEnvelope, FaHome, FaUserAlt } from 'react-icons/fa';

const NavbarContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	padding: ${({ isMobile }) => (isMobile ? '1em 0' : '1em')};
	flex-direction: ${({ isMobile }) => (isMobile ? 'row' : 'column')};
	row-gap: ${({ isMobile }) => (isMobile ? 0 : '1em')};
	column-gap: ${({ isMobile }) => (isMobile ? '.75em' : 0)};
	top: ${({ isMobile }) => !isMobile && 0 };
	left: ${({ isMobile }) => isMobile && 0 };
	right: 0;
	bottom: 0;
  z-index: 500;
	top: ${({ isMobile }) => !isMobile && 0};
	left: ${({ isMobile }) => isMobile && 0};
`;

const Navbar = () => {
	const theme = useContext(ThemeContext);

	return (
		<NavbarContainer isMobile={window.innerWidth >= theme.breakpoints.values.md ? false : true}>
			<IconButton to="/">
				<FaHome className="icon--sm" />
			</IconButton>
			<IconButton to="/about-me">
				<FaUserAlt className="icon--sm" />
			</IconButton>
			<IconButton to="/my-portfolio">
				<FaBook className="icon--sm" />
			</IconButton>
			<IconButton to="/contact-me">
				<FaEnvelope className="icon--sm" />
			</IconButton>
		</NavbarContainer>
	);
};

export default Navbar;
