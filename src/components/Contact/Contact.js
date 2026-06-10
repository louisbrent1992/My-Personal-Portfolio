import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { profile } from "../../constants/constants";
import {
	Section,
	SectionHeading,
	fadeUp,
	stagger,
	viewportOnce,
} from "../../styles/GlobalComponents";

const Wrapper = styled(motion.div)`
	text-align: center;
	max-width: 56rem;
	margin: 0 auto;
`;

const Lead = styled(motion.p)`
	font-size: 1.7rem;
	color: ${({ theme }) => theme.colors.textMuted};
	margin-bottom: 3.6rem;
`;

const EmailBtn = styled(motion.a)`
	display: inline-flex;
	align-items: center;
	padding: 1.4rem 3.2rem;
	border-radius: 8px;
	font-family: ${({ theme }) => theme.fonts.mono};
	font-size: 1.5rem;
	font-weight: 600;
	border: 1px solid ${({ theme }) => theme.colors.accent};
	color: ${({ theme }) => theme.colors.accent};
	transition: background 0.2s ease, transform 0.2s ease,
		box-shadow 0.2s ease;

	&:hover {
		background: ${({ theme }) => theme.colors.accentDim};
		transform: translateY(-2px);
		box-shadow: 0 8px 24px ${({ theme }) => theme.colors.accentGlow};
	}
`;

const Phone = styled(motion.p)`
	margin-top: 2rem;
	font-family: ${({ theme }) => theme.fonts.mono};
	font-size: 1.4rem;
	color: ${({ theme }) => theme.colors.textFaint};
`;

const Contact = () => (
	<Section id="contact">
		<SectionHeading
			index="06."
			variants={fadeUp}
			initial="hidden"
			whileInView="visible"
			viewport={viewportOnce}
		>
			Contact
		</SectionHeading>
		<Wrapper
			variants={stagger}
			initial="hidden"
			whileInView="visible"
			viewport={viewportOnce}
		>
			<Lead variants={fadeUp}>
				Open to systems support, infrastructure, and development opportunities.
				Inbox is always open — I&apos;ll get back to you as soon as I can.
			</Lead>
			<EmailBtn variants={fadeUp} href={`mailto:${profile.email}`}>
				{profile.email}
			</EmailBtn>
		</Wrapper>
	</Section>
);

export default Contact;
