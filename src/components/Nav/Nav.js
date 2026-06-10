import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useScroll, useSpring } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { navLinks, profile, socials } from "../../constants/constants";

const Bar = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	background: ${({ scrolled }) =>
		scrolled ? "rgba(10, 15, 20, 0.85)" : "transparent"};
	backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(12px)" : "none")};
	border-bottom: 1px solid
		${({ scrolled, theme }) => (scrolled ? theme.colors.border : "transparent")};
	transition: background 0.3s ease, border-color 0.3s ease;
`;

const Progress = styled(motion.div)`
	position: absolute;
	bottom: -1px;
	left: 0;
	right: 0;
	height: 2px;
	background: ${({ theme }) => theme.colors.accent};
	transform-origin: 0%;
`;

const Inner = styled.nav`
	max-width: 1080px;
	margin: 0 auto;
	padding: 1.6rem 2.4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
`;

const Logo = styled.a`
	font-family: ${({ theme }) => theme.fonts.mono};
	font-size: 1.6rem;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.text};

	span {
		color: ${({ theme }) => theme.colors.accent};
	}
`;

const Links = styled.ul`
	display: flex;
	align-items: center;
	gap: 2.8rem;

	@media ${({ theme }) => theme.breakpoints.md} {
		display: none;
	}
`;

const NavItem = styled.a`
	font-size: 1.4rem;
	color: ${({ theme }) => theme.colors.textMuted};
	transition: color 0.2s ease;

	&:hover {
		color: ${({ theme }) => theme.colors.accent};
	}
`;

const Socials = styled.div`
	display: flex;
	align-items: center;
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

	@media ${({ theme }) => theme.breakpoints.md} {
		display: none;
	}
`;

const Burger = styled.button`
	display: none;
	background: none;
	border: none;
	color: ${({ theme }) => theme.colors.text};
	width: 2.8rem;
	height: 2.2rem;
	position: relative;

	span {
		position: absolute;
		left: 0;
		width: 100%;
		height: 2px;
		background: currentColor;
		border-radius: 2px;
		transition: transform 0.3s ease, opacity 0.3s ease, top 0.3s ease;

		&:nth-child(1) {
			top: ${({ open }) => (open ? "50%" : "0")};
			transform: ${({ open }) => (open ? "rotate(45deg)" : "none")};
		}
		&:nth-child(2) {
			top: 50%;
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			top: ${({ open }) => (open ? "50%" : "100%")};
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "none")};
		}
	}

	@media ${({ theme }) => theme.breakpoints.md} {
		display: block;
	}
`;

const Drawer = styled(motion.div)`
	display: none;
	overflow: hidden;
	border-top: 1px solid ${({ theme }) => theme.colors.border};
	background: rgba(10, 15, 20, 0.97);

	ul {
		padding: 1.6rem 2.4rem 2.4rem;
		display: flex;
		flex-direction: column;
		gap: 1.6rem;
	}

	@media ${({ theme }) => theme.breakpoints.md} {
		display: block;
	}
`;

const Nav = () => {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 24,
		restDelta: 0.001,
	});

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<Bar scrolled={scrolled ? 1 : 0}>
			<Inner>
				<Logo href="#top" aria-label={profile.name}>
					louis<span>.</span>brent
				</Logo>
				<Links>
					{navLinks.map(({ label, href }) => (
						<li key={href}>
							<NavItem href={href}>{label}</NavItem>
						</li>
					))}
				</Links>
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
				<Burger
					open={open ? 1 : 0}
					onClick={() => setOpen(!open)}
					aria-label="Toggle menu"
					aria-expanded={open}
				>
					<span />
					<span />
					<span />
				</Burger>
			</Inner>
			<Progress style={{ scaleX: progress }} />
			<Drawer
				initial={false}
				animate={{ height: open ? "auto" : 0 }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			>
				<ul>
					{navLinks.map(({ label, href }) => (
						<li key={href}>
							<NavItem href={href} onClick={() => setOpen(false)}>
								{label}
							</NavItem>
						</li>
					))}
				</ul>
			</Drawer>
		</Bar>
	);
};

export default Nav;
