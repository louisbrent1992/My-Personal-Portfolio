import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3); }
  50% { box-shadow: 0 20px 60px rgba(123, 66, 246, 0.3); }
`;

export const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Video = styled.video`
  width: 100%;
  height: 250px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  padding: 4rem 2rem;
  place-items: center;
  column-gap: 2.5rem;
  row-gap: 3rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    padding: 3rem 1.5rem;
    gap: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

export const BlogCard = styled.div`
  border-radius: 20px;
  text-align: center;
  width: 100%;
  background: rgba(17, 25, 40, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  position: relative;

  /* Gradient border effect on hover */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 1px;
    background: linear-gradient(135deg, transparent, transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    transition: all 0.4s ease;
    z-index: 1;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    border-color: transparent;
    animation: ${glowPulse} 2s ease-in-out infinite;

    &::before {
      background: linear-gradient(135deg, #00FFF5 0%, #7B42F6 50%, #FF00E5 100%);
    }

    ${Img}, ${Video} {
      transform: scale(1.08);
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  font-weight: 900;
  z-index: 20;
  color: ${(props) => props.theme.colors.primary1};
  margin-inline: 1.5rem;
  padding-top: 1.5rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "2.4rem" : "1.8rem")};
  background: linear-gradient(135deg, #00FFF5 0%, #7B42F6 50%, #FF00E5 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background-position 0.5s ease;

  ${BlogCard}:hover & {
    animation: ${shimmer} 2s linear infinite;
  }
`;

export const Hr = styled.hr`
  width: 60px;
  height: 3px;
  margin: 16px auto;
  border: 0;
  background: linear-gradient(90deg, #00FFF5 0%, #7B42F6 50%, #FF00E5 100%);
  border-radius: 100px;
  opacity: 0.6;
  transition: all 0.3s ease;

  ${BlogCard}:hover & {
    width: 100px;
    opacity: 1;
  }
`;

export const StackContainer = styled.div`
  padding-block: 1rem;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.primary1};
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  color: rgba(255, 255, 255, 0.65);
  margin-inline: 2rem;
  font-size: 1.5rem;
  line-height: 26px;
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
    margin-inline: 1.5rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
`;

export const ExternalLinks = styled.a`
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 12px 28px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &:first-child {
    background: linear-gradient(135deg, #00FFF5 0%, #7B42F6 100%);
    border: none;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(0, 255, 245, 0.3);
    }
  }

  &:last-child {
    &:hover {
      border-color: #FF00E5;
      color: #FF00E5;
      box-shadow: 0 0 20px rgba(255, 0, 229, 0.2);
      transform: translateY(-3px);
    }
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-inline: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Tag = styled.li`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 14px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 245, 0.1);
    border-color: rgba(0, 255, 245, 0.3);
    color: #00FFF5;
  }
`;
