import Link from "next/link";
import { IoIosArrowDropdown } from "react-icons/io";
import styled, { keyframes } from "styled-components";

const glow = keyframes`
  0%, 100% { text-shadow: 0 0 20px rgba(0, 255, 245, 0); }
  50% { text-shadow: 0 0 20px rgba(0, 255, 245, 0.5); }
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 60px;
  width: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(5, 8, 22, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 50px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    padding: 16px 20px;
  }
`;

export const Span = styled.span`
  font-size: 2.2rem;
  font-weight: 700;
  transition: 0.3s ease;
  background: linear-gradient(135deg, #00FFF5 0%, #7B42F6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    animation: ${glow} 1s ease-in-out;
    cursor: pointer;
  }
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const Div2 = styled.nav`
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 3.5rem;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
    gap: 2rem;
  }
`;

export const Div3 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

export const NavLink = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 8px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #00FFF5 0%, #7B42F6 100%);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #fff;
    
    &::after {
      width: 100%;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
    font-size: 1.4rem;
  }
`;

export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: 0.3s ease;
  padding: 8px 0;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
    font-size: 1.4rem;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};
  color: ${({ isOpen }) => (isOpen ? "#00FFF5" : "inherit")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

export const PageLink = styled(Link)``;

export const SocialIcons = styled(Link)`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  padding: 10px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);

  &:hover {
    background: rgba(0, 255, 245, 0.1);
    border-color: rgba(0, 255, 245, 0.3);
    color: #00FFF5;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 255, 245, 0.15);
  }
`;
