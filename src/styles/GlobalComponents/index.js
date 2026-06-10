import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
	max-width: 1080px;
	margin: 0 auto;
	padding: 10rem 2.4rem;

	@media ${({ theme }) => theme.breakpoints.md} {
		padding: 7rem 2rem;
	}
`;

export const SectionHeading = styled(motion.h2)`
	display: flex;
	align-items: center;
	gap: 1.6rem;
	font-size: 3rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.text};
	margin-bottom: 4.8rem;

	&::before {
		content: "${({ index }) => index}";
		font-family: ${({ theme }) => theme.fonts.mono};
		font-size: 1.6rem;
		font-weight: 400;
		color: ${({ theme }) => theme.colors.accent};
	}

	&::after {
		content: "";
		flex: 1;
		height: 1px;
		background: ${({ theme }) => theme.colors.border};
	}

	@media ${({ theme }) => theme.breakpoints.md} {
		font-size: 2.4rem;
		margin-bottom: 3.6rem;
	}
`;

export const Tag = styled.span`
	font-family: ${({ theme }) => theme.fonts.mono};
	font-size: 1.2rem;
	color: ${({ theme }) => theme.colors.accent};
	background: ${({ theme }) => theme.colors.accentDim};
	padding: 0.4rem 1rem;
	border-radius: 99px;
	white-space: nowrap;
`;

export const Card = styled(motion.div)`
	background: ${({ theme }) => theme.colors.surface};
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 12px;
	transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

	&:hover {
		border-color: ${({ theme }) => theme.colors.borderHover};
		transform: translateY(-4px);
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
	}
`;

/* Shared framer-motion variants */
export const fadeUp = {
	hidden: { opacity: 0, y: 28 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
	},
};

export const stagger = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1 } },
};

export const viewportOnce = { once: true, margin: "-80px" };
