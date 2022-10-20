import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { SkillCardContainer, SkillImage, SkillName } from '../styles/SkillCard.styled'

const SkillCard = ({ handleClick, cursorPointer, image, name }) => {
  
  const theme = useContext(ThemeContext);
  const COLOR_PRIMARY_MAIN = theme?.palette.primary.main;
  const COLOR_BACKGROUND_DEFAULT = theme?.palette.background.default;
  const COLOR_BACKGROUND_BORDER = theme?.palette.background.border;
  const COLOR_TEXT_PRIMARY = theme?.palette.text.primary;

  return (
    <SkillCardContainer
      onClick={handleClick}
      cursorPointer={cursorPointer}
      hoverColor={COLOR_PRIMARY_MAIN}
      bgColor={COLOR_BACKGROUND_DEFAULT}
      borderColor={COLOR_BACKGROUND_BORDER}
      color={COLOR_TEXT_PRIMARY}>
      <SkillImage src={image} alt="Skill Image"/>
      <SkillName>{name}</SkillName>
    </SkillCardContainer>
  )
}

export default SkillCard