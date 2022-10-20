import styled from "styled-components";

export const AchievementCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 1rem;
  border: 2px solid;
  border-color: ${({ borderColor }) => borderColor};
  padding: 3em 4.5em;
  column-gap: 2.5em;
`

export const MedalContainer = styled.div`
  display: flex;
  position: relative;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  border: 1px solid;
  border-color: ${({ borderColor }) => borderColor};
  width: 100px;
  height: 100px;
  overflow: hidden;
`

export const MedalIcon = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

export const AchievementDetailsContainer = styled.div`

`

export const AchievementTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  color: ${({color}) => color};
  margin-top: 0;
  margin-bottom: 1em;
`

export const AchievementSubtitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({color}) => color};
  margin: 0;
`