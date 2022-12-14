import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage, AboutMe, MyPortfolio, ContactMe } from './pages';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { ThemeButton, Navbar } from './components';
import MobileHomePage from './pages/mobile-home-page';

function App() {
	const theme = useContext(ThemeContext);
	const isMobile = window.innerWidth < theme?.breakpoints.values.md;

	return (
		<HashRouter>
			<div className="App" style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}>
				<ThemeButton />
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about-me" element={<AboutMe />} />
					<Route path="/my-portfolio" element={<MyPortfolio />} />
					<Route path="/contact-me" element={<ContactMe />} />
				</Routes>
			</div>
		</HashRouter>
	);
}

export default App;
