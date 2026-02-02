import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";

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
  VideoContainer,
  PlayButton,
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

const VideoPlayer = ({ video, image }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <VideoContainer onClick={handlePlay}>
      {!isPlaying && (
        <PlayButton>
          <FaPlayCircle size="5rem" />
        </PlayButton>
      )}
      <Video
        ref={videoRef}
        loop
        muted

        playsInline
        poster={image}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </VideoContainer>
  );
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
              <VideoPlayer video={video} image={image} />
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
