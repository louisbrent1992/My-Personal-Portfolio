import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Education from "../components/Education/Education";
import Contact from "../components/Contact/Contact";
import { Layout } from "../layout/Layout";

const Home = () => (
	<Layout>
		<Hero />
		<About />
		<Experience />
		<Skills />
		<Projects />
		<Education />
		<Contact />
	</Layout>
);

export default Home;
