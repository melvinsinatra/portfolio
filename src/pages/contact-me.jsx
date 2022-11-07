import React, { useContext } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedinIn, FaGithub, FaPaperPlane, FaPhoneSquareAlt } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';
import { SubContainer } from '../styles/ContactMe.styled';
import { Flex, PageContainer, Wrapper } from '../styles/Layouts.styled';
import { BodyText, DarkBackgroundTitle, EmphasizedText, PageTitle, SubHeading } from '../styles/Typographies.styled';
import { PrimaryContainer } from './../styles/ContactMe.styled';
import { IconButton, Input, Button } from '../components';

const ContactMe = () => {
	const theme = useContext(ThemeContext);
	const COLOR_TEXT_PRIMARY = theme?.palette.text.primary;
	const COLOR_TEXT_TERTIARY = theme?.palette.text.tertiary;
	const COLOR_PRIMARY_MAIN = theme?.palette.primary.main;
	const isMobile = window.innerWidth < theme.breakpoints.values.md;

	return (
		<>
			<DarkBackgroundTitle className="animate__animated animate__fadeIn" color={COLOR_TEXT_TERTIARY}>
				My
				<br />
				Information
			</DarkBackgroundTitle>
			<PageContainer className="animate__animated animate__fadeIn" flexDir='column' p={isMobile && '0 1em'} pB={isMobile && '6em'}>
				<PageTitle color={COLOR_TEXT_PRIMARY}>
					<EmphasizedText color={COLOR_PRIMARY_MAIN}>Contact</EmphasizedText> Me
				</PageTitle>
				<PrimaryContainer flexDir={isMobile ? 'column' : 'row'} colGap={!isMobile && '10%'} rowGap={isMobile && '3em'}>
					{/**
					 * Contact Me Details Container
					 */}
					<SubContainer flex="1">
						<SubHeading color={COLOR_TEXT_PRIMARY}>Contact Me</SubHeading>
						<BodyText color={COLOR_TEXT_PRIMARY}>
							Here are my contacts and socials. Feel free to contact me anytime! I'll try to contact back ASAP ^_^
						</BodyText>
						{/* Info Detail */}
						<Flex py=".5em" colGap="1em" alignItems="center">
							<Flex colGap={isMobile ? "1em" : "2em"} flex={isMobile ? 1.5 : 1.33} alignItems="center">
								<FaMapMarkerAlt color={COLOR_TEXT_PRIMARY} className="icon--lg" />
								<BodyText color={COLOR_TEXT_PRIMARY}>Location:</BodyText>
							</Flex>
							<BodyText color={COLOR_TEXT_PRIMARY} flex={2}>
								South Bekasi, West Java, Indonesia
							</BodyText>
						</Flex>
						<Flex py=".5em" colGap="1em" alignItems="center">
							<Flex colGap={isMobile ? "1em" : "2em"} flex={isMobile ? 1.5 : 1.33} alignItems="center">
									<FaPhoneSquareAlt color={COLOR_TEXT_PRIMARY} className="icon--lg"/>
								<BodyText color={COLOR_TEXT_PRIMARY}>Phone Number:</BodyText>
							</Flex>
							<BodyText color={COLOR_TEXT_PRIMARY} flex={2}>
								+62 812-1942-2630
							</BodyText>
						</Flex>
						<Flex py=".5em" colGap="1em" alignItems="center">
							<Flex colGap={isMobile ? "1em" : "2em"} flex={isMobile ? 1.5 : 1.33} alignItems="center">
								<FaEnvelope color={COLOR_TEXT_PRIMARY} className="icon--lg" />
								<BodyText color={COLOR_TEXT_PRIMARY}>Email:</BodyText>
							</Flex>
							<BodyText color={COLOR_TEXT_PRIMARY} flex={2}>
								melvin.sinatra@binus.ac.id
							</BodyText>
						</Flex>

						{/* Icons */}
						<Flex align-items="center" colGap="1em" py=".5em">
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
					<Wrapper flex="1">
					<form action="https://formsubmit.co/melvin.sinatra2002@gmail.com" method="POST">
						<SubContainer rowGap=".75em">
							<Flex colGap={!isMobile && '1em'} rowGap={isMobile && '.75em'} justifyContent="space-between" flexDir={isMobile ? "column" : "row"}>
								<Input flex="1" type="text" placeholder="Name" name="name" />
								<Input flex="1" type="email" placeholder="Email" name="email" />
							</Flex>
							<Input type="text" placeholder="Enter Subject" name="subject" />
							<Input flex="1" type="textarea" placeholder="Enter Message" name="subject" />
							<Button Icon={FaPaperPlane}>Send</Button>
						</SubContainer>
						</form>
					</Wrapper>
				</PrimaryContainer>
			</PageContainer>
		</>
	);
};

export default ContactMe;
