export const profile = {
	name: "Louis Brent",
	role: "Systems Support & Infrastructure Professional",
	tagline:
		"I build reliable systems and full-stack applications — from kiosk networks and CI/CD pipelines to cross-platform apps.",
	summary:
		"Detail-oriented Systems Support and Technical Infrastructure Professional with hands-on training in core networking principles, configuration standards, and infrastructure diagnostics. Skilled at interpreting technical documentation to maintain structured data models and ensure strict data integrity. Experienced in leveraging command-line tools, Git version control, and light scripting to automate validation and maintain consistent sources of truth.",
	location: "Los Angeles, CA",
	email: "louisbrent1992@gmail.com",
	phone: "(405) 561-1255",
};

export const socials = {
	github: "https://github.com/louisbrent1992",
	linkedin: "https://www.linkedin.com/in/louis-brent/",
};

export const navLinks = [
	{ label: "About", href: "#about" },
	{ label: "Experience", href: "#experience" },
	{ label: "Skills", href: "#skills" },
	{ label: "Projects", href: "#projects" },
	{ label: "Education", href: "#education" },
	{ label: "Contact", href: "#contact" },
];

export const experience = [
	{
		company: "Amazon",
		role: "Retail Support & Infrastructure Specialist",
		period: "2023 — Present",
		points: [
			"Diagnose and resolve hardware, software, and local network connectivity issues across distributed kiosk networks to maximize infrastructure uptime.",
			"Perform system configuration verifications, resets, and subnet-level troubleshooting to restore service availability and maintain baseline operational standards.",
			"Monitor and troubleshoot synchronization errors across distributed platforms, protecting data integrity and ensuring consistent source-of-truth accuracy.",
		],
		tags: ["Networking", "Diagnostics", "Data Integrity"],
	},
	{
		company: "Advent Hub Solutions",
		role: "Independent Infrastructure & Applications Developer",
		period: "2023 — 2026",
		points: [
			"Interpreted system reference guidelines to build, structure, and deploy cross-platform application modules against specific configuration parameters.",
			"Maintained configuration environments and codebase tracking using Git command-line operations to establish clear version history.",
			"Leveraged light scripting and automation via GitHub Actions to streamline routine testing workflows and build validation checkpoints.",
		],
		tags: ["Git", "GitHub Actions", "CI/CD"],
	},
	{
		company: "Semibot",
		role: "Full Stack Developer",
		period: "2022 — 2023",
		points: [
			"Interacted with cross-functional technical teams, including operations and deployment squads, to support stable application releases.",
			"Built internal data verification utilities using Node.js to clean, structure, and automate baseline operational and tracking records.",
			"Investigated application behavior and connection drops by evaluating backend server logs and network request traffic.",
		],
		tags: ["Node.js", "Log Analysis", "Automation"],
	},
];

export const skillGroups = [
	{
		title: "Networking Foundations",
		skills: [
			"OSI Model",
			"TCP/IP Suite",
			"IP Addressing & Subnetting",
			"Ethernet Fabric Concepts",
			"VLAN Routing Basics",
		],
	},
	{
		title: "Infrastructure Modeling & Logic",
		skills: [
			"NetBox / Nautobot Environments",
			"Rack Layout Templates",
			"Device Grouping Rules",
			"Cabling Topology Logic",
		],
	},
	{
		title: "Automation & Version Control",
		skills: [
			"Git (CLI)",
			"GitHub Actions",
			"Automation Scripting",
			"CI/CD Pipeline Support",
		],
	},
	{
		title: "Scripting & Tooling",
		skills: [
			"Python",
			"Node.js",
			"Express.js",
			"JavaScript",
			"Command-Line Utilities",
		],
	},
	{
		title: "Systems & Diagnostics",
		skills: [
			"Linux Operating Systems",
			"Log Analysis",
			"Technical Documentation",
			"System Diagnostics",
			"Data Integrity Verification",
		],
	},
];

export const projects = [
	{
		title: "RecipEase: AI Recipe Scanner",
		description:
			"Utilizes OpenAI to generate creative and tasty recipes based on available ingredients. Say goodbye to wondering what to cook with RecipEase!",
		image: "./images/recipease-app-cover.png",
		tags: ["Dart", "Flutter", "OpenAI", "DALL-E"],
		code: "https://github.com/louisbrent1992/flutter-recipe-app",
		visit: "https://apps.apple.com/us/app/recipeease-kitchen/id6748662065",
		id: 0,
	},
	{
		title: "Media Streaming Site",
		description:
			"A modern media streaming platform featuring a dynamic homepage with featured content, 'Now Playing' sections, and detailed movie views. Users can browse, search, and view ratings for their favorite films.",
		image: "./images/media-streaming-site.png",
		tags: ["React", "Styled-Components"],
		code: "https://github.com/louisbrent1992/WeLoveMovies-App/",
		visit: "https://welovemovs.netlify.app/",
		id: 1,
	},
	{
		title: "Music Label Site",
		description:
			"A fully responsive React music label website template featuring a resizable navbar, page routing, navigation dropdown menu, and more.",
		image: "./images/music-label-new.png",
		tags: ["React", "Styled-Components"],
		code: "https://github.com/louisbrent1992/Record-Label",
		visit: "https://pulse-records.netlify.app/",
		id: 2,
	},
	{
		title: "Restaurant Reservation System",
		description:
			"A reservation system tailored for fine dining restaurants. It allows restaurant staff to effortlessly create, track, and modify customer reservations.",
		image: "./images/restaurant-reservation-new.png",
		tags: ["React", "Node", "PostgreSQL", "Express"],
		code: "https://github.com/louisbrent1992/Restaurant-Reservation-App",
		visit: "https://lumiere-reservations.netlify.app/",
		id: 3,
	},
	{
		title: "Deaf Church Online",
		description:
			"An online ministry providing worship, fellowship, and spiritual growth in American Sign Language for the Deaf community.",
		image: "./images/Deaf-Church-Online.jpg",
		tags: ["React", "Next.js", "Styled-Components"],
		code: "#",
		visit: "https://deaf-church-online.netlify.app/",
		id: 4,
	},
	{
		title: "Tic Tac Toe",
		description:
			"A simple tic tac toe game built using HTML, CSS, and JavaScript.",
		image: "./images/tic-tac-toe-new.png",
		tags: ["HTML", "CSS", "JavaScript"],
		code: "https://github.com/louisbrent1992/TicTacToe",
		visit: "https://simply-ttt.netlify.app/",
		id: 5,
	},
];

export const education = [
	{
		school: "Per Scholas",
		credential: "CompTIA A+ Core 1 & Core 2 Professional Training",
		year: "2026",
		details: [
			"Core 1 Infrastructure Focus: physical network hardware, cable termination topologies, IP configuration, and addressing structures.",
			"Core 2 Operations Focus: operating system environments, script-driven automation concepts, command-line usage, and formal ticketing documentation.",
		],
	},
	{
		school: "Chegg Skills (Thinkful)",
		credential: "Engineering-Immersion Certificate of Completion",
		year: "2021 — 2022",
		details: [],
	},
	{
		school: "UC Irvine",
		credential:
			"B.A. Psychology of Social Behavior • B.A. Criminology, Law & Society",
		year: "2020",
		details: [],
	},
];
