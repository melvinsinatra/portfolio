import React from 'react';
import styled from "styled-components";
import { FaRegMoon } from 'react-icons/fa';
import { ThemeContext, ThemeModeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import '../App.css';
import Ripple from './Ripple';

const StyledThemeButton = styled.button`
  width: ${({ isMobile }) => isMobile ? '35px' : '70px'};
  height: ${({ isMobile }) => isMobile ? '35px' : '70px'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 1vh;
  right: 1vw;
  border-radius: 50%;
  background-color: ${ ({bg}) => bg };
  color: ${ ({color}) => color  };
  cursor: pointer;
  border: none;
  overflow: hidden;
  z-index: 501;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: ${({ isMobile }) => isMobile ? '75%' : '50%'};
    height: ${({ isMobile }) => isMobile ? '75%' : '50%'};
  }
`

const ThemeButton = () => {

	const theme = useContext(ThemeContext);
	const { mode, setMode } = useContext(ThemeModeContext);
  const isMobile = window.innerWidth < theme?.breakpoints.values.md;
	
	function handleThemeClick() {
    setMode(prev => {
      localStorage.setItem("theme", prev === "light" ? "dark" : "light");
      return prev === "light" ? "dark" : "light";
    })
  }

	return (
      <StyledThemeButton isMobile={isMobile} onClick={handleThemeClick} bg={theme.palette.grey[400]} color={theme.palette.common.white}>
        <FaRegMoon />
				<Ripple color={theme.palette.grey[500]} duration={800}/>
      </StyledThemeButton>
	);
};

export default ThemeButton;
