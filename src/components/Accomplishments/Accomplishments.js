import React from "react";
import { motion } from "framer-motion";

import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AccomplishmentsStyles";

const data = [
  { number: "60+", text: "Open Source Projects" },
  { number: "400+", text: "GitHub Contributions" },
  { number: "50+", text: "Happy Clients" },
  { number: "5+", text: "Years Experience" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const Accomplishments = () => (
  <Section>
    <SectionDivider />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle main>By The Numbers</SectionTitle>
      <SectionText>
        A snapshot of my journey as a developer — continuous learning,
        consistent delivery, and impactful contributions.
      </SectionText>
    </motion.div>

    <Boxes>
      {data.map((card, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <Box>
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        </motion.div>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
