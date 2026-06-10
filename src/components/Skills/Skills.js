import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
	HiOutlineGlobeAlt,
	HiOutlineServer,
	HiOutlineCog,
	HiOutlineCode,
	HiOutlineTerminal,
} from "react-icons/hi";
import { skillGroups } from "../../constants/constants";
import {
	Section,
	SectionHeading,
	Card,
	fadeUp,
	stagger,
	viewportOnce,
} from "../../styles/GlobalComponents";

const icons = [
	HiOutlineGlobeAlt,
	HiOutlineServer,
	HiOutlineCog,
	HiOutlineCode,
	HiOutlineTerminal,
];

const Grid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
	gap: 2rem;
`;

const SkillCard = styled(Card)`
	padding: 2.4rem;
`;

const CardTitle = styled.h3`
	display: flex;
	align-items: center;
	gap: 1rem;
	font-size: 1.7rem;
	font-weight: 600;
	margin-bottom: 1.6rem;

	svg {
		color: ${({ theme }) => theme.colors.accent};
		flex-shrink: 0;
	}
`;

const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;

	li {
		font-family: ${({ theme }) => theme.fonts.mono};
		font-size: 1.35rem;
		color: ${({ theme }) => theme.colors.textMuted};

		&::before {
			content: "— ";
			color: ${({ theme }) => theme.colors.textFaint};
		}
	}
`;

const Skills = () => (
	<Section id="skills">
		<SectionHeading
			index="03."
			variants={fadeUp}
			initial="hidden"
			whileInView="visible"
			viewport={viewportOnce}
		>
			Skills & Knowledge
		</SectionHeading>
		<Grid
			variants={stagger}
			initial="hidden"
			whileInView="visible"
			viewport={viewportOnce}
		>
			{skillGroups.map((group, i) => {
				const Icon = icons[i % icons.length];
				return (
					<SkillCard key={group.title} variants={fadeUp}>
						<CardTitle>
							<Icon size="2.2rem" />
							{group.title}
						</CardTitle>
						<List>
							{group.skills.map((skill) => (
								<li key={skill}>{skill}</li>
							))}
						</List>
					</SkillCard>
				);
			})}
		</Grid>
	</Section>
);

export default Skills;
