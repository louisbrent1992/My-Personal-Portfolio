import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { experience } from "../../constants/constants";
import {
	Section,
	SectionHeading,
	Tag,
	fadeUp,
	stagger,
	viewportOnce,
} from "../../styles/GlobalComponents";

const Timeline = styled(motion.div)`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 4rem;
	padding-left: 3.2rem;

	&::before {
		content: "";
		position: absolute;
		left: 0.6rem;
		top: 0.6rem;
		bottom: 0.6rem;
		width: 1px;
		background: ${({ theme }) => theme.colors.border};
	}
`;

const Entry = styled(motion.article)`
	position: relative;

	&::before {
		content: "";
		position: absolute;
		left: -3.2rem;
		top: 0.7rem;
		width: 1.3rem;
		height: 1.3rem;
		border-radius: 50%;
		border: 2px solid ${({ theme }) => theme.colors.accent};
		background: ${({ theme }) => theme.colors.background};
	}
`;

const Period = styled.p`
	font-family: ${({ theme }) => theme.fonts.mono};
	font-size: 1.3rem;
	color: ${({ theme }) => theme.colors.accent};
	margin-bottom: 0.6rem;
`;

const Role = styled.h3`
	font-size: 2rem;
	font-weight: 600;
	margin-bottom: 0.4rem;

	span {
		color: ${({ theme }) => theme.colors.textMuted};
		font-weight: 500;
	}
`;

const Points = styled.ul`
	margin: 1.4rem 0 1.6rem;
	display: flex;
	flex-direction: column;
	gap: 0.9rem;

	li {
		font-size: 1.5rem;
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

const Tags = styled.div`
	display: flex;
	gap: 0.8rem;
	flex-wrap: wrap;
`;

const Experience = () => (
	<Section id="experience">
		<SectionHeading
			index="02."
			variants={fadeUp}
			initial="hidden"
			whileInView="visible"
			viewport={viewportOnce}
		>
			Experience
		</SectionHeading>
		<Timeline
			variants={stagger}
			initial="hidden"
			whileInView="visible"
			viewport={viewportOnce}
		>
			{experience.map((job) => (
				<Entry key={job.company} variants={fadeUp}>
					<Period>{job.period}</Period>
					<Role>
						{job.role} <span>· {job.company}</span>
					</Role>
					<Points>
						{job.points.map((point, i) => (
							<li key={i}>{point}</li>
						))}
					</Points>
					<Tags>
						{job.tags.map((tag) => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</Tags>
				</Entry>
			))}
		</Timeline>
	</Section>
);

export default Experience;
