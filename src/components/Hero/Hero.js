import React from "react";
import {
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { HeroSection, HeroContent, HeroImageContainer, HeroTag, HeroSubtitle, FloatingShape, GlowOrb } from "./HeroStyles";
import Profile from "./Profile";
import { motion } from "framer-motion";

const Hero = () => (
  <HeroSection>
    {/* Floating decorative elements */}
    <FloatingShape
      size="300px"
      gradient="linear-gradient(135deg, rgba(0, 255, 245, 0.15), rgba(123, 66, 246, 0.15))"
      top="-100px"
      left="-100px"
      blur="80px"
      duration="10s"
    />
    <FloatingShape
      size="200px"
      gradient="linear-gradient(135deg, rgba(255, 0, 229, 0.15), rgba(123, 66, 246, 0.1))"
      bottom="100px"
      right="30%"
      blur="60px"
      duration="12s"
      delay="2s"
    />
    <GlowOrb />

    <HeroContent>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeroTag>Available for Work</HeroTag>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SectionTitle main giant>
          CREATIVE<br />
          DEVELOPER
        </SectionTitle>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <HeroSubtitle>
          Hi, I'm <span>Louis Brent</span> — a Full-Stack Engineer crafting
          beautiful, scalable digital experiences with modern technologies and
          a passion for clean code.
        </HeroSubtitle>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button onClick={() => (window.location = "#projects")}>
          Explore My Work
        </Button>
      </motion.div>
    </HeroContent>

    <HeroImageContainer>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.3, type: 'spring', stiffness: 100 }}
      >
        <Profile />
      </motion.div>
    </HeroImageContainer>
  </HeroSection>
);

export default Hero;
