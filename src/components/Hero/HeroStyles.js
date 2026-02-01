import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 30px rgba(123, 66, 246, 0.4); }
  50% { box-shadow: 0 0 60px rgba(0, 255, 245, 0.5); }
`;

export const HeroSection = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  padding: 0 80px;
  position: relative;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 120px 30px 60px;
    height: auto;
  }
`;

export const HeroContent = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  position: relative;
`;

export const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 5;
  
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 60px;
  }
`;

export const HeroTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 255, 245, 0.1);
  border: 1px solid rgba(0, 255, 245, 0.3);
  border-radius: 100px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #00FFF5;
  margin-bottom: 24px;
  width: fit-content;
  backdrop-filter: blur(10px);
  animation: ${float} 4s ease-in-out infinite;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #00FFF5;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.2); }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0 auto 24px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  max-width: 550px;
  line-height: 1.7;
  margin-top: 20px;
  margin-bottom: 40px;

  span {
    color: #00FFF5;
    font-weight: 500;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 18px;
    max-width: 100%;
    text-align: center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`;

export const FloatingShape = styled.div`
  position: absolute;
  width: ${props => props.size || '200px'};
  height: ${props => props.size || '200px'};
  border-radius: 50%;
  background: ${props => props.gradient || 'linear-gradient(135deg, rgba(0, 255, 245, 0.1), rgba(123, 66, 246, 0.1))'};
  filter: blur(${props => props.blur || '60px'});
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  animation: ${float} ${props => props.duration || '8s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  pointer-events: none;
  z-index: 1;
`;

export const GlowOrb = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(123, 66, 246, 0.3) 0%, transparent 70%);
  top: 20%;
  right: 10%;
  animation: ${glowPulse} 5s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
`;
