import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { CloseButton, CloseButtonWrapper, ModalBackground, ModalBody, ModalContainer, ModalHeader, ModalWrapper } from '../styles/Modal.styled';
import { skills } from '../utils/constants';
import SkillCard from './SkillCard';
import { SubHeading } from '../styles/Typographies.styled';

import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({ handleClick }) => {
	const theme = useContext(ThemeContext);
	const isMobile = window.innerWidth < theme?.breakpoints.values.md;
	const COLOR_COMMON_BLACK = theme?.palette.common.black;
	const COLOR_TEXT_PRIMARY = theme?.palette.text.primary;
  const COLOR_PRIMARY_MAIN = theme?.palette.primary.main;
	const COLOR_BACKGROUND_DEFAULT = theme?.palette.background.default;
	const COLOR_BACKGROUND_BORDER = theme?.palette.background.border;

	const skillCardEls = skills.map((item, index) => <SkillCard key={index} image={item?.image} name={item?.name} />);

	return (
		<ModalBackground bgColor={COLOR_BACKGROUND_DEFAULT}>
			<ModalWrapper>
				<ModalContainer isMobile={isMobile} p={'.5em'} bgColor={COLOR_BACKGROUND_DEFAULT} borderColor={COLOR_PRIMARY_MAIN}>
					<ModalHeader>
						<SubHeading>My Skill Set</SubHeading>
						<CloseButtonWrapper>
							<CloseButton onClick={handleClick} color={COLOR_TEXT_PRIMARY} bgColor={COLOR_BACKGROUND_DEFAULT} borderColor={COLOR_BACKGROUND_BORDER}>
								<AiOutlineClose/>
							</CloseButton>
						</CloseButtonWrapper>
					</ModalHeader>
					<ModalBody isMobile={isMobile} gap={ isMobile ? '.5em' : '2em'}>{skillCardEls}</ModalBody>
				</ModalContainer>
			</ModalWrapper>
		</ModalBackground>
	);
};

export default Modal;
