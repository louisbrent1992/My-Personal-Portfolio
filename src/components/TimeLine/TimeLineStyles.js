import styled, { keyframes } from "styled-components";

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const dotPulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
`;

export const CarouselContainer = styled.ul`
  max-width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  position: relative;
  padding: 20px 0;

  /* Connecting line */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      rgba(0, 255, 245, 0.3) 0%, 
      rgba(123, 66, 246, 0.5) 50%, 
      rgba(255, 0, 229, 0.3) 100%
    );
    transform: translateY(-50%);
    z-index: 0;
  }

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 24px;
    gap: 24px;
    padding: 20px;
  }
`;

export const CarouselMobileScrollNode = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => (final ? `120%;` : `min-content`)};
  }
`;

export const CarouselItem = styled.div`
  background: rgba(17, 25, 40, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  max-width: 220px;
  position: relative;
  z-index: 1;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  /* Dot indicator */
  &::before {
    content: '';
    position: absolute;
    top: -32px;
    left: 50%;
    transform: translateX(-50%);
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00FFF5 0%, #7B42F6 100%);
    border: 3px solid #050816;
    animation: ${dotPulse} 2s ease-in-out infinite;
    animation-delay: ${props => props.delay || '0s'};
    z-index: 2;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 255, 245, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(123, 66, 246, 0.1);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 180px;
    padding: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    min-width: 160px;
    scroll-snap-align: start;
    padding: 16px;
  }
`;

export const CarouselItemTitle = styled.h4`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #00FFF5 0%, #7B42F6 50%, #FF00E5 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 12px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 26px;
    line-height: 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 22px;
    line-height: 28px;
  }
`;

export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`;

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.65);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 13px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const CarouselButtons = styled.div`
  width: 288px;
  display: none;
  visibility: hidden;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 32px;
    justify-content: center;
    gap: 8px;
  }
`;

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 6px;
  border: none;
  cursor: pointer;
  opacity: ${(props) => (props.active === props.index ? `1` : `.4`)};
  transform: ${(props) => props.active === props.index ? `scale(1.3)` : `scale(1)`};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 1;
  }
`;

export const CarouselButtonDot = styled.div`
  background: linear-gradient(135deg, #00FFF5 0%, #7B42F6 100%);
  border-radius: 50%;
  margin: auto;
  width: 8px;
  height: 8px;
`;
