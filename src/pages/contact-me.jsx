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
	const COLOR_GREY_500 = theme?.palette.grey[500];
	const COLOR_TEXT_PRIMARY = theme?.palette.text.primary;
	const COLOR_PRIMARY_MAIN = theme?.palette.primary.main;

	return (
		<>
			<DarkBackgroundTitle className="animate__animated animate__fadeIn" color={COLOR_GREY_500}>
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

						<FaMapMarkerAlt className="icon--lg" />
						<BodyText>Location:</BodyText>
						<BodyText>South Bekasi, West Java, Indonesia</BodyText>

						<FaPhoneAlt className="icon--lg" />

						<BodyText>Phone Number:</BodyText>
						<BodyText>+62 812-1942-2630</BodyText>

						<FaEnvelope className="icon--lg" />

						<BodyText>Email:</BodyText>
						<BodyText>melvin.sinatra@binus.ac.id</BodyText>

						{/* Icons */}
						<Flex align-items="center" colGap="1em">
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
					<SubContainer></SubContainer>
				</PrimaryContainer>
			</PageContainer>
		</>
	);
};

export default ContactMe;
