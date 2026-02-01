import React from "react";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  SocialLink,
  Copyright,
} from "./FooterStyles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SocialIconsContainer>
          <CompanyContainer>
            <LinkTitle style={{ fontSize: '24px', letterSpacing: '0' }}>
              Let's Connect
            </LinkTitle>
            <Slogan>
              Ready to bring your ideas to life? Let's build something amazing together.
            </Slogan>
          </CompanyContainer>

          <SocialContainer>
            <SocialLink
              target="_blank"
              href="mailto:louisbrent1992@gmail.com"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <HiMail size="1.4rem" />
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://github.com/louisbrent1992"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <AiFillGithub size="1.4rem" />
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://linkedin.com/in/louis-brent"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin size="1.4rem" />
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://twitter.com/louisbrent1992"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size="1.2rem" />
            </SocialLink>
          </SocialContainer>
        </SocialIconsContainer>

        <LinkList>
          <LinkColumn>
            <LinkTitle>Navigation</LinkTitle>
            <LinkItem href="#projects">Projects</LinkItem>
            <LinkItem href="#tech">Technologies</LinkItem>
            <LinkItem href="#about">About</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Contact</LinkTitle>
            <LinkItem
              target="_blank"
              href="mailto:louisbrent1992@gmail.com"
              rel="noopener noreferrer"
            >
              Email
            </LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Social</LinkTitle>
            <LinkItem
              target="_blank"
              href="https://github.com/louisbrent1992"
              rel="noopener noreferrer"
            >
              GitHub
            </LinkItem>
            <LinkItem
              target="_blank"
              href="https://linkedin.com/in/louis-brent"
              rel="noopener noreferrer"
            >
              LinkedIn
            </LinkItem>
          </LinkColumn>
        </LinkList>

        <Copyright>
          © {currentYear} <span>Louis Brent</span>. All rights reserved.
        </Copyright>
      </motion.div>
    </FooterWrapper>
  );
};

export default Footer;
