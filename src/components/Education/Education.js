import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { education } from "../../constants/constants";
import {
	Section,
	SectionHeading,
	Card,
	fadeUp,
	stagger,
	viewportOnce,
} from "../../styles/GlobalComponents";

const Grid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
	gap: 2rem;
`;

const EduCard = styled(Card)`
	padding: 2.4rem;
	display: flex;
	flex-direction: column;
`;

const Year = styled.p`
	display: flex;
	align-items: center;
	gap: 0.8rem;
	font-family: ${({ theme }) => theme.fonts.mono};
	font-size: 1.3rem;
	color: ${({ theme }) => theme.colors.accent};
	margin-bottom: 1.2rem;
`;

const School = styled.h3`
	font-size: 1.9rem;
	font-weight: 600;
	margin-bottom: 0.6rem;
`;

const Credential = styled.p`
	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.textMuted};
`;

const Details = styled.ul`
	margin-top: 1.4rem;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;

	li {
		font-size: 1.4rem;
		color: ${({ theme }) => theme.colors.textMuted};
		padding-left: 1.8rem;
		position: relative;

		&::before {
			content: "▸";
			position: absolute;
			left: 0;
			color: ${({ theme }) => theme.colors.accent};
		}
	}
`;

const Education = () => (
	<Section id="education">
		<SectionHeading
			index="05."
			variants={fadeUp}
			initial="hidden"
			whileInView="visible"
			viewport={viewportOnce}
		>
			Education & Certifications
		</SectionHeading>
		<Grid
			variants={stagger}
			initial="hidden"
			whileInView="visible"
			viewport={viewportOnce}
		>
			{education.map((entry) => (
				<EduCard key={entry.school} variants={fadeUp}>
					<Year>
						<HiOutlineAcademicCap size="1.8rem" /> {entry.year}
					</Year>
					<School>{entry.school}</School>
					<Credential>{entry.credential}</Credential>
					{entry.details.length > 0 && (
						<Details>
							{entry.details.map((detail, i) => (
								<li key={i}>{detail}</li>
							))}
						</Details>
					)}
				</EduCard>
			))}
		</Grid>
	</Section>
);

export default Education;
