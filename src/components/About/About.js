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

const Grid = styled(motion.div)`
	display: grid;
	grid-template-columns: 1.6fr 1fr;
	gap: 4.8rem;
	align-items: start;

	@media ${({ theme }) => theme.breakpoints.md} {
		grid-template-columns: 1fr;
	}
`;

const Text = styled(motion.p)`
	font-size: 1.7rem;
	color: ${({ theme }) => theme.colors.textMuted};
	margin-bottom: 2rem;
`;

const Highlights = styled(motion.ul)`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	border-left: 1px solid ${({ theme }) => theme.colors.border};
	padding-left: 2.4rem;

	li {
		font-family: ${({ theme }) => theme.fonts.mono};
		font-size: 1.4rem;
		color: ${({ theme }) => theme.colors.textMuted};

		&::before {
			content: "▸ ";
			color: ${({ theme }) => theme.colors.accent};
		}
	}
`;

const highlights = [
	"Networking & diagnostics",
	"Source-of-truth data integrity",
	"Git + GitHub Actions automation",
	"Full-stack JavaScript & Python",
	"Linux systems & log analysis",
];

const About = () => (
	<Section id="about">
		<SectionHeading
			index="01."
			variants={fadeUp}
			initial="hidden"
			whileInView="visible"
			viewport={viewportOnce}
		>
			About
		</SectionHeading>
		<Grid
			variants={stagger}
			initial="hidden"
			whileInView="visible"
			viewport={viewportOnce}
		>
			<div>
				<Text variants={fadeUp}>{profile.summary}</Text>
				<Text variants={fadeUp}>
					Proven history of collaborating with technical teams to optimize
					deployment workflows and resolve connectivity challenges.
				</Text>
			</div>
			<Highlights variants={fadeUp}>
				{highlights.map((h) => (
					<li key={h}>{h}</li>
				))}
			</Highlights>
		</Grid>
	</Section>
);

export default About;
