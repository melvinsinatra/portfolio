import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, AboutMe, MyPortfolio, ContactMe } from './pages';
import { useContext } from 'react';
import { ThemeContext, ThemeModeContext } from './contexts/ThemeContext';
import { ThemeButton, Navbar } from './components';

function App() {
	const theme = useContext(ThemeContext);

	return (
		<BrowserRouter>
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
		</BrowserRouter>
	);
}

export default App;
