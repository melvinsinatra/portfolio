import { createContext, useContext, useState } from 'react';

export const ThemeModeContext = createContext();
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
	const [mode, setMode] = useState(() => localStorage.getItem('theme') || 'light');

	const theme = {
		breakpoints: {
			keys: ['xs', 'sm', 'md', 'lg', 'xl'],
			values: {
				xs: 0,
				sm: 600,
				md: 900,
				lg: 1200,
				xl: 1536
			}
		},
		...(mode === 'light'
			? {
					palette: {
						mode: mode,
						primary: {
							main: '#8500F0'
						},
						common: {
							black: '#191D2B',
							white: '#fff'
						},
						grey: {
							50: '#F8F8F8',
							100: '#DBE1E8',
							200: '#B2BECD',
							300: '#6C7983',
							400: '#454E56',
							500: '#2A2E35',
							600: '#12181B'
						},
						background: {
							default: '#fff',
							border: '#DBE1E8',
						},
						text: {
							primary: '#191D2B',
							secondary: '#FFF',
							tertiary: '#DBE1E8',
							accent: '#12181B'
						}
					}
			  }
			: {
					palette: {
						mode: mode,
						primary: {
							main: '#8500F0'
						},
						common: {
							black: '#191D2B',
							white: '#fff'
						},
						grey: {
							50: '#F8F8F8',
							100: '#DBE1E8',
							200: '#B2BECD',
							300: '#6C7983',
							400: '#454E56',
							500: '#2A2E35',
							600: '#12181B'
						},
						background: {
							default: '#191D2B',
							border: '#2A2E35'
						},
						text: {
							primary: '#fff',
							secondary: '#191D2B',
							tertiary: '#2A2E35',
							accent: '#B2BECD'
						}
					}
			  })
	};

	return (
		<ThemeModeContext.Provider value={{ mode, setMode }}>
			<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
		</ThemeModeContext.Provider>
	);
};
