import Link from "next/link";
import React from "react";
import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillTwitterCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	PageLink,
	SocialIcons,
	Span,
} from "./HeaderStyles";

const Header = () => (
	<Container>
		<Div1>
			<Link
				style={{
					display: "flex",
					alignItems: "center",
					color: "white",
					marginBottom: "2rem",
				}}
				href="https://github.com/louisbrent1992"
			>
				<DiCssdeck size="3rem" /> <Span>Advent Hub Solutions Llc</Span>
			</Link>
		</Div1>

		<Div2>
			<li>
				<PageLink href="#projects">
					<NavLink>Projects</NavLink>
				</PageLink>
			</li>
			<li>
				<PageLink href="#tech">
					<NavLink>Technologies</NavLink>
				</PageLink>
			</li>
			<li>
				<PageLink href="#about">
					<NavLink>About</NavLink>
				</PageLink>
			</li>
		</Div2>
		<Div3>
			<SocialIcons
				target="_blank"
				href="https://github.com/louisbrent1992"
				rel="noopener noreferrer"
			>
				<AiFillGithub
					size="3rem"
					style={{
						marginLeft: "5px",
						marginTop: "5px",
					}}
				/>
			</SocialIcons>
			<SocialIcons
				target="_blank"
				href="https://linkedin.com/in/louis-brent"
				rel="noopener noreferrer"
			>
				<AiFillLinkedin
					size="3rem"
					style={{
						marginLeft: "5px",
						marginTop: "5px",
					}}
				/>
			</SocialIcons>
			<SocialIcons
				target="_blank"
				href="https://twitter.com/louisbrent1992"
				rel="noopener noreferrer"
			>
				<AiFillTwitterCircle
					size="3rem"
					style={{
						marginLeft: "5px",
						marginTop: "5px",
					}}
				/>
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;
