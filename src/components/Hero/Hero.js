import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { profile } from "../../constants/constants";
import { fadeUp, stagger } from "../../styles/GlobalComponents";

const Wrapper = styled.section`
	position: relative;
	min-height: 100vh;
	display: flex;
	align-items: center;
	overflow: hidden;
`;

const Glow = styled.div`
	position: absolute;
	top: 20%;
	right: -10%;
	width: 56rem;
	height: 56rem;
	border-radius: 50%;
	background: radial-gradient(
		circle,
		${({ theme }) => theme.colors.accentGlow} 0%,
		transparent 65%
	);
	filter: blur(40px);
	pointer-events: none;
`;

const Inner = styled(motion.div)`
	max-width: 1080px;
	margin: 0 auto;
	padding: 12rem 2.4rem 6rem;
	width: 100%;
`;

const Prompt = styled(motion.p)`
	font-family: ${({ theme }) => theme.fonts.mono};
	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.accent};
	margin-bottom: 2rem;

	&::before {
		content: "$ ";
		color: ${({ theme }) => theme.colors.textFaint};
	}

	&::after {
		content: "▊";
		animation: blink 1.1s step-end infinite;
		margin-left: 0.4rem;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
`;

const Name = styled(motion.h1)`
	font-size: clamp(4rem, 8vw, 7.2rem);
	font-weight: 700;
	letter-spacing: -0.02em;
	margin-bottom: 1.2rem;
`;

const Role = styled(motion.h2)`
	font-size: clamp(2rem, 4vw, 3.2rem);
	font-weight: 500;
	color: ${({ theme }) => theme.colors.textMuted};
	margin-bottom: 2.8rem;
`;

const Tagline = styled(motion.p)`
	max-width: 56rem;
	font-size: 1.8rem;
	color: ${({ theme }) => theme.colors.textMuted};
	margin-bottom: 1.6rem;

	@media ${({ theme }) => theme.breakpoints.md} {
		font-size: 1.6rem;
	}
`;

const Location = styled(motion.p)`
	display: flex;
	align-items: center;
	gap: 0.6rem;
	font-family: ${({ theme }) => theme.fonts.mono};
	font-size: 1.4rem;
	color: ${({ theme }) => theme.colors.textFaint};
	margin-bottom: 4rem;
`;

const Actions = styled(motion.div)`
	display: flex;
	gap: 1.6rem;
	flex-wrap: wrap;
`;

const PrimaryBtn = styled.a`
	display: inline-flex;
	align-items: center;
	padding: 1.2rem 2.8rem;
	border-radius: 8px;
	font-size: 1.5rem;
	font-weight: 600;
	background: ${({ theme }) => theme.colors.accent};
	color: ${({ theme }) => theme.colors.background};
	transition: transform 0.2s ease, box-shadow 0.2s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px ${({ theme }) => theme.colors.accentGlow};
	}
`;

const GhostBtn = styled.a`
	display: inline-flex;
	align-items: center;
	padding: 1.2rem 2.8rem;
	border-radius: 8px;
	font-size: 1.5rem;
	font-weight: 600;
	border: 1px solid ${({ theme }) => theme.colors.border};
	color: ${({ theme }) => theme.colors.text};
	transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;

	&:hover {
		border-color: ${({ theme }) => theme.colors.borderHover};
		background: ${({ theme }) => theme.colors.accentDim};
		transform: translateY(-2px);
	}
`;

const Hero = () => (
	<Wrapper id="top">
		<Glow />
		<Inner variants={stagger} initial="hidden" animate="visible">
			<Prompt variants={fadeUp}>whoami</Prompt>
			<Name variants={fadeUp}>{profile.name}</Name>
			<Role variants={fadeUp}>{profile.role}</Role>
			<Tagline variants={fadeUp}>{profile.tagline}</Tagline>
			<Location variants={fadeUp}>
				<HiOutlineLocationMarker /> {profile.location}
			</Location>
			<Actions variants={fadeUp}>
				<PrimaryBtn href="#projects">View Projects</PrimaryBtn>
				<GhostBtn href="#contact">Get in Touch</GhostBtn>
			</Actions>
		</Inner>
	</Wrapper>
);

export default Hero;
