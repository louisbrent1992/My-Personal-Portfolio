import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(0, 255, 245, 0.4); }
  50% { box-shadow: 0 0 0 10px rgba(0, 255, 245, 0); }
`;

const countUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 32px 0 48px;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
    margin: 24px 0 36px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin: 20px 0 32px;
  }
`;

export const Box = styled.div`
  background: rgba(17, 25, 40, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  height: 160px;
  padding: 28px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  /* Gradient line at top */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #00FFF5 0%, #7B42F6 50%, #FF00E5 100%);
    background-size: 200% auto;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(123, 66, 246, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(123, 66, 246, 0.15);

    &::before {
      opacity: 1;
      animation: ${shimmer} 2s linear infinite;
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    height: 150px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    height: 140px;
    padding: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 120px;
    padding: 16px;
  }
`;

export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 800;
  font-size: 42px;
  line-height: 48px;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #00FFF5 0%, #7B42F6 50%, #FF00E5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${countUp} 0.8s ease-out forwards;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 36px;
    line-height: 40px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 28px;
    line-height: 32px;
  }
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.65);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 14px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
  flex-wrap: wrap;
  gap: 16px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    padding-bottom: 40px;
  }
`;

export const JoinText = styled.h5`
  display: flex;
  font-size: 22px;
  line-height: 36px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 18px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
    text-align: center;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 12px;

  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: center;
  }
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #fff;

  &:hover {
    background: rgba(0, 255, 245, 0.1);
    border-color: rgba(0, 255, 245, 0.4);
    color: #00FFF5;
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 255, 245, 0.2);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 44px;
    height: 44px;
  }
`;
