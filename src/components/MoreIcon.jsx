import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const MoreIcon = () => {

  const theme = useContext(ThemeContext);
  const COLOR_TEXT_PRIMARY = theme?.palette.text.primary;

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="155" height="155" fill="none" viewBox="0 0 155 155">
			<path
				fill={COLOR_TEXT_PRIMARY}
				stroke={COLOR_TEXT_PRIMARY}
				strokeWidth="7"
				d="M26.647 84.017a6.417 6.417 0 100-12.834 6.417 6.417 0 000 12.834zM77.98 84.017a6.417 6.417 0 100-12.834 6.417 6.417 0 000 12.834zM129.313 84.017a6.417 6.417 0 100-12.834 6.417 6.417 0 000 12.834z"
			></path>
		</svg>
	);
};
