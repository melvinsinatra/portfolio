import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import { StyledNavIconButton } from '../styles/IconButton.styled';

const NavIconButton = ({ to, children }) => {
	const theme = useContext(ThemeContext);
	const COLOR_COMMON_WHITE = theme.palette.common.white;
	const COLOR_PRIMARY_MAIN = theme.palette.primary.main;
	const COLOR_GREY_400 = theme.palette.grey[400];

	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });

	return (
		<Link to={to}>
			<StyledNavIconButton bgMain={COLOR_PRIMARY_MAIN} bgGrey={COLOR_GREY_400} isActive={isActive} color={COLOR_COMMON_WHITE}>
				{children}
			</StyledNavIconButton>
		</Link>
	);
};

export default NavIconButton;
