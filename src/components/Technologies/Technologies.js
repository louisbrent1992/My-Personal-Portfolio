import React from "react";
import { DiReact } from "react-icons/di";
import { FaServer, FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  ListIcon,
} from "./TechnologiesStyles";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const techStack = [
  {
    icon: <DiReact size="2rem" color="#00FFF5" />,
    title: "Front-End",
    description: "React, Dart, TypeScript, Styled-Components, Framer Motion"
  },
  {
    icon: <FaServer size="1.8rem" color="#7B42F6" />,
    title: "Back-End",
    description: "Node.js, Express, MongoDB, PostgreSQL, REST APIs, GraphQL"
  },
  {
    icon: <FaPaintBrush size="1.8rem" color="#FF00E5" />,
    title: "UI/UX Design",
    description: "Figma, Adobe Suite, Responsive Design, Design Systems"
  }
];

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle>My Tech Stack</SectionTitle>
      <SectionText>
        Building modern web and mobile experiences with cutting-edge technologies.
        From pixel-perfect frontends to scalable backend architectures.
      </SectionText>
    </motion.div>

    <List>
      {techStack.map((tech, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <ListItem>
            <ListIcon>
              {tech.icon}
            </ListIcon>
            <ListContainer>
              <ListTitle>{tech.title}</ListTitle>
              <ListParagraph>{tech.description}</ListParagraph>
            </ListContainer>
          </ListItem>
        </motion.div>
      ))}
    </List>
  </Section>
);

export default Technologies;
