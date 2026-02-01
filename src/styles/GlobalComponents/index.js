import styled, { keyframes, css } from 'styled-components'

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 30px rgba(123, 66, 246, 0.3), 0 0 60px rgba(0, 255, 245, 0.1); }
  50% { box-shadow: 0 0 50px rgba(123, 66, 246, 0.5), 0 0 80px rgba(0, 255, 245, 0.2); }
`;

export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex"};
  flex-direction: ${(props) => props.row ? "row" : "column"};
  padding: ${(props) => props.nopadding ? "0" : "80px 60px 0"};
  margin: 0 auto;
  max-width: 1400px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 60px 40px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "40px 20px 0"};
    width: calc(100vw - 40px);
    flex-direction: column;
  }
`

export const SectionTitle = styled.h2`
  font-weight: 900;
  font-size: ${(props) => props.main ? '72px' : '56px'};
  line-height: ${(props) => props.main ? '80px' : '64px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 50%, #FFFFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 24px;
  padding: ${(props) => props.main ? '0' : '0'};
  position: relative;
  letter-spacing: -0.02em;

  ${props => props.giant && css`
    font-size: 120px;
    line-height: 120px;
    background: linear-gradient(135deg, #00FFF5 0%, #7B42F6 50%, #FF00E5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
    animation: ${shimmer} 4s linear infinite;
    margin-bottom: 16px;
    filter: drop-shadow(0 0 30px rgba(123, 66, 246, 0.3));
  `}

  ${props => props.glow && css`
    text-shadow: 0 0 40px rgba(0, 255, 245, 0.5);
  `}

  @media ${props => props.theme.breakpoints.lg}{
    ${props => props.giant && css`font-size: 90px; line-height: 100px;`}
  }

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '44px'};
    line-height: ${(props) => props.main ? '64px' : '52px'};
    margin-bottom: 16px;
    ${props => props.giant && css`font-size: 70px; line-height: 80px;`}
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: ${(props) => props.main ? '36px' : '32px'};
    line-height: ${(props) => props.main ? '44px' : '40px'};
    margin-bottom: 12px;
    max-width: 100%;
    ${props => props.giant && css`font-size: 48px; line-height: 56px;`}
  }
`

export const SectionText = styled.p`
  max-width: 700px;
  font-size: 20px;
  line-height: 36px;
  font-weight: 400;
  padding-bottom: 3rem;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.01em;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 100%;
    font-size: 18px;
    line-height: 30px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 26px;
    padding-bottom: 16px;
  }
`

export const SectionDivider = styled.div`
  width: 80px;
  height: 4px;
  border-radius: 100px;
  background: linear-gradient(90deg, #00FFF5 0%, #7B42F6 50%, #FF00E5 100%);
  margin: ${(props) => props.divider ? "5rem 0" : "0 0 2rem 0"};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    animation: ${shimmer} 2s infinite;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 60px;
    height: 3px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 40px;
    height: 2px;
  }
`

export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.6);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 100%;
    font-size: 16px;
    line-height: 26px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 24px;
  }
`

export const SecondaryBtn = styled.button`
  color: #FFF;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 100px;
  padding: 16px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    border-color: #00FFF5;
    color: #00FFF5;
    box-shadow: 0 0 30px rgba(0, 255, 245, 0.3), inset 0 0 20px rgba(0, 255, 245, 0.1);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }

  @media ${(props) => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 14px 28px;
    font-size: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 12px 24px;
    width: 100%;
    font-size: 14px;
    text-align: center;
  }
`

export const ButtonBack = styled.div`
  width: ${({ alt }) => alt ? '160px' : '280px'};
  height: ${({ alt }) => alt ? '54px' : '64px'};
  border-radius: 100px;
  font-size: ${({ alt }) => alt ? '18px' : '20px'};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form) ? '0' : '0 0 80px'};
  color: #fff;
  background: linear-gradient(135deg, #7B42F6 0%, #FF00E5 50%, #00FFF5 100%);
  background-size: 200% auto;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  animation: ${glowPulse} 3s ease-in-out infinite;

  &:hover {
    background-position: right center;
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 20px 40px rgba(123, 66, 246, 0.4);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => alt ? '150px' : '200px'};
    height: ${({ alt }) => alt ? '50px' : '54px'};
    font-size: ${({ alt }) => alt ? '16px' : '16px'};
    margin-bottom: ${({ alt }) => alt ? '0' : '64px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 50px;
    font-size: 14px;
    margin-bottom: ${({ alt }) => alt ? '0' : '32px'};
  }
`

export const ButtonFront = styled.button`
  border: none;
  border-radius: 100px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #00FFF5 0%, #7B42F6 50%, #FF00E5 100%);
  background-size: 200% auto;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: ${({ alt }) => alt ? '18px' : '20px'};
  font-weight: 700;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  letter-spacing: 0.5px;

  &:hover {
    opacity: 0;
  }

  &:focus {
    outline: none;
  }

  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => alt ? '16px' : '16px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => large ? '24px' : '16px'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  justify-content: center;
  border-radius: 50%;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(0, 255, 245, 0.1);
    border-color: rgba(0, 255, 245, 0.3);
    transform: scale(1.15) translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 255, 245, 0.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => large ? '16px' : '8px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => large ? '0' : '8px'};
  }
`

export const LinkIconImg = styled.div`
  display: flex;  
  height: ${({ large }) => large ? '28px' : '22px'};
  color: #fff;
  transition: color 0.3s ease;

  ${LinkContainer}:hover & {
    color: #00FFF5;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => nav ? '16px' : '22px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => large ? '28px' : '16px'};
  }
`
