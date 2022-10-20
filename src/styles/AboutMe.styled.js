import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: ${({flexDir}) => flexDir || 'row'};
  column-gap: 10%;
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
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows 235px;
  grid-gap: 2.5em;
`

export const EducationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

`

export const ExperienceContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2em;
  grid-auto-rows: 294px;
`

export const AchievementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 1em;
`