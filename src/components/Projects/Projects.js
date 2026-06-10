import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { projects } from "../../constants/constants";
import {
	Section,
	SectionHeading,
	Card,
	Tag,
	fadeUp,
	stagger,
	viewportOnce,
} from "../../styles/GlobalComponents";

const Grid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
	gap: 2.4rem;

	@media ${({ theme }) => theme.breakpoints.sm} {
		grid-template-columns: 1fr;
	}
`;

const ProjectCard = styled(Card)`
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

const Thumb = styled.div`
	position: relative;
	aspect-ratio: 16 / 9;
	overflow: hidden;
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
		transition: transform 0.45s ease;
	}

	${ProjectCard}:hover & img {
		transform: scale(1.04);
	}
`;

const Body = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 2rem 2.4rem 2.4rem;
`;

const TitleRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.2rem;
	margin-bottom: 1rem;
`;

const Title = styled.h3`
	font-size: 1.9rem;
	font-weight: 600;
`;

const IconLinks = styled.div`
	display: flex;
	gap: 1rem;

	a {
		color: ${({ theme }) => theme.colors.textMuted};
		display: flex;
		transition: color 0.2s ease, transform 0.2s ease;

		&:hover {
			color: ${({ theme }) => theme.colors.accent};
			transform: translateY(-2px);
		}
	}
`;

const Description = styled.p`
	font-size: 1.45rem;
	color: ${({ theme }) => theme.colors.textMuted};
	flex: 1;
	margin-bottom: 1.8rem;
`;

const Tags = styled.div`
	display: flex;
	gap: 0.8rem;
	flex-wrap: wrap;
`;

const Projects = () => (
	<Section id="projects">
		<SectionHeading
			index="04."
			variants={fadeUp}
			initial="hidden"
			whileInView="visible"
			viewport={viewportOnce}
		>
			Projects
		</SectionHeading>
		<Grid
			variants={stagger}
			initial="hidden"
			whileInView="visible"
			viewport={viewportOnce}
		>
			{projects.map(({ id, title, description, image, tags, code, visit }) => (
				<ProjectCard key={id} variants={fadeUp}>
					<Thumb>
						<a href={visit} target="_blank" rel="noopener noreferrer">
							<img src={image} alt={title} loading="lazy" />
						</a>
					</Thumb>
					<Body>
						<TitleRow>
							<Title>{title}</Title>
							<IconLinks>
								{code && code !== "#" && (
									<a
										href={code}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`${title} source code`}
									>
										<AiFillGithub size="2rem" />
									</a>
								)}
								<a
									href={visit}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`${title} live site`}
								>
									<HiOutlineExternalLink size="2rem" />
								</a>
							</IconLinks>
						</TitleRow>
						<Description>{description}</Description>
						<Tags>
							{tags.map((tag) => (
								<Tag key={tag}>{tag}</Tag>
							))}
						</Tags>
					</Body>
				</ProjectCard>
			))}
		</Grid>
	</Section>
);

export default Projects;
