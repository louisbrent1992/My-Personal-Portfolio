import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(0, 255, 245, 0.4); }
  50% { box-shadow: 0 0 0 12px rgba(0, 255, 245, 0); }
`;

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; removed to fix positioning */
  position: relative;
  margin: 60px 0;
  
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    background: linear-gradient(180deg, #00FFF5 0%, #7B42F6 50%, #FF00E5 100%);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1.5px;
    border-radius: 100px;
    opacity: 0.6;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: flex-start;
    padding-left: 30px;
    &::after {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 20px 60px;
  position: relative;
  background-color: inherit;
  width: 50%;
  z-index: 1; /* Ensure content sits above the timeline line */
  left: ${(props) => (props.left ? "0" : "50%")};
  text-align: ${(props) => (props.left ? "right" : "left")};

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 16px 40px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    left: 0;
    width: 100%;
    padding-left: 50px;
    padding-right: 16px;
    text-align: left;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  right: -8px;
  background: linear-gradient(135deg, #00FFF5 0%, #7B42F6 100%);
  border: 3px solid #050816;
  top: 28px;
  border-radius: 50%;
  z-index: 1;
  animation: ${pulse} 2s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || '0s'};

  ${(props) => props.left ? `right: -8px;` : `left: -8px;`}

  @media ${(props) => props.theme.breakpoints.sm} {
    left: -8px;
  }
`;

const TimelineContent = styled.div`
  padding: 28px 32px;
  background: rgba(17, 25, 40, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  min-width: 320px;
  max-width: 450px;
  display: inline-block;

  /* Gradient accent */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    ${(props) => props.left ? 'right: 0;' : 'left: 0;'}
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #00FFF5 0%, #7B42F6 50%, #FF00E5 100%);
    opacity: 0.7;
    transition: opacity 0.3s ease;
    border-radius: 4px;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(123, 66, 246, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(123, 66, 246, 0.1);

    &::before {
      opacity: 1;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    min-width: 260px;
    max-width: 380px;
    padding: 24px 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    min-width: unset;
    max-width: unset;
    width: 100%;
    padding: 20px 24px;
    
    &::before {
      left: 0;
      right: auto;
    }
  }
`;

const Year = styled.h3`
  font-weight: 800;
  font-size: 28px;
  background: linear-gradient(135deg, #00FFF5 0%, #7B42F6 50%, #FF00E5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
  letter-spacing: -0.02em;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: rgba(255, 255, 255, 0.75);
  word-wrap: break-word;
  overflow-wrap: anywhere;
  word-break: break-word;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 15px;
    line-height: 24px;
  }
`;

const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle main>My Journey</SectionTitle>
        <SectionText>
          From curious beginner to full-stack developer — a timeline of growth,
          learning, and building meaningful digital experiences.
        </SectionText>
      </motion.div>

      <TimelineWrapper>
        {TimeLineData.map((item, index) => (
          <TimelineItem
            key={index}
            left={index % 2 === 0}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <TimelineDot left={index % 2 === 0} delay={`${index * 0.5}s`} />
            <TimelineContent left={index % 2 === 0}>
              <Year>{item.year}</Year>
              <Description>{item.text}</Description>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineWrapper>
    </Section>
  );
};

export default Timeline;
