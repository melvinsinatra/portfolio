import React, { useContext, useState } from 'react';
import Button from '../components/Button';
import TimelineCard from '../components/TimelineCard';
import StatCard from '../components/StatCard';
import SkillCard from '../components/SkillCard';
import { ThemeContext } from '../contexts/ThemeContext';
import { MyInformationContainer, Container, StatsContainer, EducationContainer, ExperienceContainer, SkillsContainer } from '../styles/AboutMe.styled';
import { PageContainer } from './../styles/Layouts.styled';
import { BodyText, DarkBackgroundTitle, EmphasizedText, PageTitle, SubHeading } from './../styles/Typographies.styled';
import { achievements, education, experience, skills } from './../utils/constants';
import { AchievementsContainer } from './../styles/AboutMe.styled';
import AchievementCard from '../components/AchievementCard';

import Modal from '../components/Modal';
import { MoreIcon } from './../components/MoreIcon';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const AboutMe = () => {
	const [openModal, setOpenModal] = useState(false);

	function handleOpenModal() {
		setOpenModal((prev) => !prev);
	}

	const theme = useContext(ThemeContext);
	const COLOR_PRIMARY_MAIN = theme?.palette.primary.main;
	const COLOR_TEXT_PRIMARY = theme?.palette.text.primary;
	const COLOR_TEXT_TERTIARY = theme?.palette.text.tertiary;
	const isMobile = window.innerWidth < theme?.breakpoints.values.md;

	const educationCardEls = education.map((item, index) => (
		<TimelineCard key={index} period={item?.period} title={item?.title} subtitle={item?.subtitle} description={item?.description} />
	));

	const experienceCardEls = experience.map((item, index) => (
		<TimelineCard key={index} period={item?.period} title={item?.title} subtitle={item?.subtitle} description={item?.description} />
	));

	const displayedSkills = isMobile ? skills.slice(0, 3) : skills.slice(0, 9);
	const skillCardEls = displayedSkills.map((item, index) => <SkillCard key={index} image={item?.image} name={item?.name} />);

	const achievementCardEls = achievements.map((item, index) => (
		<AchievementCard key={index} title={item?.title} subtitle={item?.subtitle} date={item?.date} />
	));

	return (
		<>
			{openModal && <Modal handleClick={handleOpenModal} />}
			<DarkBackgroundTitle className="animate__animated animate__fadeIn" color={COLOR_TEXT_TERTIARY}>
				My
				<br />
				Bio
			</DarkBackgroundTitle>
			<PageContainer className="animate__animated animate__fadeIn" p={isMobile && '0 1em'} pB={isMobile ? '6em' : '2.5em'} flexDir="column" rowGap="2em">
				{/**
				 * Page Title
				 */}
				<PageTitle color={COLOR_TEXT_PRIMARY}>
					<EmphasizedText color={COLOR_PRIMARY_MAIN}>About</EmphasizedText> Me
				</PageTitle>
				{/**
				 * Primary Container (About Me and Stats)
				 */}
				<Container colGap={!isMobile && '10%'} rowGap={isMobile && '2em'} flexDir={isMobile ? 'column' : 'row'}>
					<MyInformationContainer>
						<SubHeading color={COLOR_TEXT_PRIMARY}>Information About Me</SubHeading>
						<BodyText color={COLOR_TEXT_PRIMARY}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
							rhoncus dolor purus non enim praesent elementum facilisis leo, vel
						</BodyText>
						<Button Icon={FaCloudDownloadAlt}>Download CV</Button>
					</MyInformationContainer>
					<StatsContainer gap={isMobile ? '1em' : '2.5em'}>
						<StatCard title="GPA" subtitle="3.85" />
						<StatCard title="Hobbies" subtitle="Web and App Development" />
						<StatCard title="9+" subtitle="Projects Completed" />
						<StatCard title="4+" subtitle="Achievements" />
					</StatsContainer>
				</Container>
				{/**
				 * Secondary Container (Education and Experience)
				 */}
				<Container colGap={!isMobile && '10%'} rowGap={isMobile && '2em'} flexDir={isMobile ? 'column' : 'row'}>
					<EducationContainer>
						<SubHeading color={COLOR_TEXT_PRIMARY}>Education</SubHeading>
						{educationCardEls}
					</EducationContainer>
					<ExperienceContainer>
						<SubHeading color={COLOR_TEXT_PRIMARY}>Experience</SubHeading>
						{experienceCardEls}
					</ExperienceContainer>
				</Container>
				{/**
				 * Skills Container
				 */}
				<Container flexDir="column">
					<SubHeading color={COLOR_TEXT_PRIMARY} textAlign="center">
						My Skill Set
					</SubHeading>
					<SkillsContainer gap={ isMobile ? '.5em' : '2em'} isMobile={isMobile}>
						{skillCardEls}
						{
							<SkillCard handleClick={handleOpenModal} cursorPointer={true} name="More.." svgIcon={true}>
								<MoreIcon />
							</SkillCard>
						}
					</SkillsContainer>
				</Container>
				{/**
				 * Achievements Container
				 */}
				<Container flexDir="column">
					<SubHeading color={COLOR_TEXT_PRIMARY} textAlign="center">
						Achievements
					</SubHeading>
					<AchievementsContainer>{achievementCardEls}</AchievementsContainer>
				</Container>
			</PageContainer>
		</>
	);
};

export default AboutMe;
