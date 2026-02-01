import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1400px;
  padding: 60px 60px 40px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;

  /* Gradient border at top */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 60px;
    right: 60px;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(0, 255, 245, 0.3) 20%, 
      rgba(123, 66, 246, 0.5) 50%, 
      rgba(255, 0, 229, 0.3) 80%, 
      transparent 100%
    );
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 40px 20px 32px;

    &::before {
      left: 20px;
      right: 20px;
    }
  }
`;

export const LinkItem = styled.a`
  font-size: 16px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: inline-block;

  &:hover {
    color: #00FFF5;
    transform: translateX(5px);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 15px;
    line-height: 26px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 10px;
  }
`;

export const SocialIconsContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    text-align: center;
  }
`;

export const Slogan = styled.p`
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.02em;
  font-size: 16px;
  line-height: 28px;
  max-width: 320px;
  margin-top: 16px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 15px;
    line-height: 26px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
    margin-top: 12px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: rgba(255, 255, 255, 0.7);

  &:hover {
    background: rgba(0, 255, 245, 0.1);
    border-color: rgba(0, 255, 245, 0.4);
    color: #00FFF5;
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 255, 245, 0.2);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 44px;
    height: 44px;
  }
`;

export const LinkList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 180px));
  gap: 40px;
  padding-top: 48px;
  padding-bottom: 32px;

  @media ${(props) => props.theme.breakpoints.lg} {
    gap: 32px;
    padding-top: 40px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding-top: 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
    text-align: center;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkTitle = styled.h4`
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  background: linear-gradient(135deg, #00FFF5 0%, #7B42F6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 13px;
    margin-bottom: 12px;
  }
`;

export const Copyright = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  span {
    background: linear-gradient(135deg, #00FFF5 0%, #7B42F6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    margin-top: 32px;
    padding-top: 20px;
  }
`;
