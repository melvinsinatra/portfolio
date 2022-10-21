import React, { useContext } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';
import { SubContainer } from '../styles/ContactMe.styled';
import { Flex, PageContainer, Wrapper } from '../styles/Layouts.styled';
import { BodyText, DarkBackgroundTitle, EmphasizedText, PageTitle, SubHeading } from '../styles/Typographies.styled';
import { PrimaryContainer } from './../styles/HomePage.styled';
import { IconButton } from './../components';

const ContactMe = () => {
	const theme = useContext(ThemeContext);
	const COLOR_TEXT_PRIMARY = theme?.palette.text.primary;
	const COLOR_TEXT_TERTIARY = theme?.palette.text.tertiary;
	const COLOR_PRIMARY_MAIN = theme?.palette.primary.main;

	return (
		<>
			<DarkBackgroundTitle className="animate__animated animate__fadeIn" color={COLOR_TEXT_TERTIARY}>
				My
				<br />
				Information
			</DarkBackgroundTitle>
			<PageContainer className="animate__animated animate__fadeIn" flexDirection="column">
				<PageTitle color={COLOR_TEXT_PRIMARY}>
					<EmphasizedText color={COLOR_PRIMARY_MAIN}>Contact</EmphasizedText> Me
				</PageTitle>
				<PrimaryContainer>
					{/**
					 * Contact Me Details Container
					 */}
					<SubContainer>
						<SubHeading color={COLOR_TEXT_PRIMARY}>Contact Me</SubHeading>
						<BodyText color={COLOR_TEXT_PRIMARY}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, quis vel obcaecati dolorem molestiae, blanditiis sint praesentium hic
							aspernatur esse pariatur odio fuga aut nemo.
						</BodyText>
						{/* Info Detail */}
						<Flex py='.5em' colGap='1em'>
							<Flex colGap='2em' flex={1.33}>
								<FaMapMarkerAlt color={COLOR_TEXT_PRIMARY} className="icon--lg" />
								<BodyText color={COLOR_TEXT_PRIMARY}>Location:</BodyText>
							</Flex>
							<BodyText color={COLOR_TEXT_PRIMARY} flex={3}>South Bekasi, West Java, Indonesia</BodyText>
						</Flex>
						<Flex py='.5em' colGap='1em'>
							<Flex colGap='2em' flex={1.33}>
								<FaPhoneAlt color={COLOR_TEXT_PRIMARY} className="icon--lg" />
								<BodyText color={COLOR_TEXT_PRIMARY}>Phone Number:</BodyText>
							</Flex>
							<BodyText color={COLOR_TEXT_PRIMARY} flex={3}>+62 812-1942-2630</BodyText>
						</Flex>
						<Flex py='.5em' colGap='1em'>
							<Flex colGap='2em' flex={1.33}>
								<FaEnvelope color={COLOR_TEXT_PRIMARY} className="icon--lg" />
								<BodyText color={COLOR_TEXT_PRIMARY}>Email:</BodyText>
							</Flex>
							<BodyText color={COLOR_TEXT_PRIMARY} flex={3}>melvin.sinatra@binus.ac.id</BodyText>
						</Flex>

						{/* Icons */}
						<Flex align-items="center" colGap="1em" py='.5em'>
							<IconButton href="https://www.linkedin.com/in/melvin-sinatra-7bb912151/" target="_blank">
								<FaLinkedinIn className="icon--md" />
							</IconButton>
							<IconButton href="https://github.com/melvinsinatra" target="_blank">
								<FaGithub className="icon--md" />
							</IconButton>
						</Flex>
					</SubContainer>
					{/**
					 * Contact Form Container
					 */}
					<SubContainer>

					</SubContainer>
				</PrimaryContainer>
			</PageContainer>
		</>
	);
};

export default ContactMe;
