import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 245, 0.1); }
  50% { box-shadow: 0 0 40px rgba(123, 66, 246, 0.2); }
`;

const iconFloat = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-5px) rotate(5deg); }
`;

export const ImageContainer = styled.div`
  text-align: center;
  width: 100%;
  padding: 40px 0;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  /* Gradient glow behind cards */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 60%;
    background: radial-gradient(ellipse, rgba(123, 66, 246, 0.15) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 20px 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 16px 0;
  }
`;

export const MainImage = styled.img`
  width: 100%;
`;

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 2rem 0;
  position: relative;
  z-index: 1;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 48px 0;
    gap: 24px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 40px 0;
    gap: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 24px 0;
    gap: 16px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    margin-left: 0;
  }
`;

export const ListItem = styled.li`
  max-width: 360px;
  display: flex;
  flex-direction: column;
  background: rgba(17, 25, 40, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 32px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;

  /* Gradient accent line at top */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #00FFF5 0%, #7B42F6 50%, #FF00E5 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-12px);
    border-color: rgba(123, 66, 246, 0.3);
    animation: ${glow} 2s ease-in-out infinite;

    &::before {
      opacity: 1;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 100%;
    padding: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    gap: 16px;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  letter-spacing: 0.02em;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #00FFF5 0%, #7B42F6 50%, #FF00E5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 22px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 8px;
  }
`;

export const ListParagraph = styled.p`
  font-size: 16px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.65);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 15px;
    line-height: 26px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const ListIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  margin-bottom: 16px;
  background: linear-gradient(135deg, rgba(0, 255, 245, 0.1) 0%, rgba(123, 66, 246, 0.1) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 24px;
  transition: all 0.3s ease;

  ${ListItem}:hover & {
    animation: ${iconFloat} 2s ease-in-out infinite;
    background: linear-gradient(135deg, rgba(0, 255, 245, 0.2) 0%, rgba(123, 66, 246, 0.2) 100%);
    border-color: rgba(0, 255, 245, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 48px;
    font-size: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 44px;
    height: 44px;
    margin-bottom: 0;
    flex-shrink: 0;
  }
`;

export const Icon = styled.img``;
