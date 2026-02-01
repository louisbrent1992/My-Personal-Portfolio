import React from "react";
import { motion } from "framer-motion";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  StackContainer,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  Video,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle main>Featured Projects</SectionTitle>
      <SectionText>
        A selection of my recent work showcasing full-stack development,
        creative problem-solving, and modern design principles.
      </SectionText>
    </motion.div>

    <GridContainer>
      {projects.map(({ id, image, video, title, description, tags, code, visit }, index) => (
        <motion.div
          key={id}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={cardVariants}
          style={{ width: '100%' }}
        >
          <BlogCard>
            {video ? (
              <Video autoPlay loop muted playsInline poster={image}>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </Video>
            ) : (
              <Img src={image} alt={title} />
            )}
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <StackContainer>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </StackContainer>
            <UtilityList>
              <ExternalLinks
                target="_blank"
                href={code}
                rel="noopener noreferrer"
              >
                View Code
              </ExternalLinks>
              <ExternalLinks
                target="_blank"
                href={visit}
                rel="noopener noreferrer"
              >
                Live Demo
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        </motion.div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
