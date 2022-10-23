import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: ${({flexDir}) => flexDir || 'row'};
  row-gap: ${({ rowGap }) => rowGap};
  column-gap: ${({ colGap }) => colGap};
  width: 100%;
`

export const MyInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const StatsContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, minmax(min(100%, 171px), 1fr));
  grid-template-rows repeat(2, minmax(min(100%, 118px), 1fr));
  gap: ${({ gap }) => gap};
`

export const EducationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 1em;
`

export const ExperienceContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 1em;
`

export const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ isMobile }) => isMobile ? 
  'repeat(2, minmax(min(100%, 171px), 1fr))' : 
  'repeat(5, minmax(min(100%, 171px), 1fr))'};
  grid-auto-rows: 294px;
  grid-gap: ${({ gap }) => gap};
`

export const AchievementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 1em;
`