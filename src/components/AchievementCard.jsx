import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AchievementCardContainer, AchievementDetailsContainer, AchievementSubtitle, AchievementTitle, MedalContainer, MedalIcon } from '../styles/AchievementCard.styled'

import Medal from '../assets/SVGs/Medal.svg'

const AchievementCard = ( { title, subtitle, date } ) => {

  const theme = useContext(ThemeContext);
  const COLOR_BACKGROUND_DEFAULT = theme?.palette.background.default;
  const COLOR_BACKGROUND_SECONDARY = theme?.palette.background.secondary;
  const COLOR_TEXT_PRIMARY = theme?.palette.text.primary;
  const COLOR_TEXT_ACCENT = theme?.palette.text.accent;

  return (
    <AchievementCardContainer bgColor={COLOR_BACKGROUND_DEFAULT} borderColor={COLOR_BACKGROUND_SECONDARY}>
      <MedalContainer bgColor={COLOR_BACKGROUND_DEFAULT} borderColor={COLOR_BACKGROUND_SECONDARY}>
        <MedalIcon src={Medal} alt="Medal Icon"/>
      </MedalContainer>
      <AchievementDetailsContainer>
        <AchievementTitle color={COLOR_TEXT_PRIMARY}>{title}</AchievementTitle>
        <AchievementSubtitle color={COLOR_TEXT_ACCENT}>
          {subtitle}
          {' '}&#8226;{' '}
          {date}
        </AchievementSubtitle>
      </AchievementDetailsContainer>
    </AchievementCardContainer>

  )
}

export default AchievementCard