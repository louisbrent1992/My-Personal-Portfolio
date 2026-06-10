import React from "react";
import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { profile, socials } from "../../constants/constants";

const Wrapper = styled.footer`
	border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Inner = styled.div`
	max-width: 1080px;
	margin: 0 auto;
	padding: 3.2rem 2.4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	flex-wrap: wrap;

	@media ${({ theme }) => theme.breakpoints.sm} {
		flex-direction: column;
		text-align: center;
	}
`;

const Copy = styled.p`
	font-family: ${({ theme }) => theme.fonts.mono};
	font-size: 1.3rem;
	color: ${({ theme }) => theme.colors.textFaint};

	span {
		color: ${({ theme }) => theme.colors.accent};
	}
`;

const Socials = styled.div`
	display: flex;
	gap: 1.4rem;

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

const Footer = () => (
	<Wrapper>
		<Inner>
			<Copy>
				© {new Date().getFullYear()} {profile.name} <span>·</span> Advent Hub
				Solutions LLC
			</Copy>
			<Socials>
				<a
					href={socials.github}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
				>
					<AiFillGithub size="2.2rem" />
				</a>
				<a
					href={socials.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
				>
					<AiFillLinkedin size="2.2rem" />
				</a>
			</Socials>
		</Inner>
	</Wrapper>
);

export default Footer;
