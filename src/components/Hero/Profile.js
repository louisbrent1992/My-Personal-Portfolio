import React from "react";
import styled, { keyframes } from "styled-components";

const breathe = keyframes`
  0%, 100% { transform: scale(1); box-shadow: 0 0 40px rgba(123, 66, 246, 0.4); }
  50% { transform: scale(1.02); box-shadow: 0 0 80px rgba(0, 255, 245, 0.5); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${breathe} 4s ease-in-out infinite;

  /* Rotating gradient border */
  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00FFF5, #7B42F6, #FF00E5, #00FFF5);
    background-size: 400% 400%;
    animation: ${rotate} 8s linear infinite;
    z-index: -1;
  }

  /* Inner glow */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(0, 255, 245, 0.2), rgba(123, 66, 246, 0.2));
    z-index: -1;
    filter: blur(20px);
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

const ProfileIMG = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  background-color: #050816;
  border: 4px solid #050816;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProfileLink = styled.a`
  text-decoration: none;
  display: block;
  border-radius: 50%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatusBadge = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 255, 245, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 245, 0.3);
  border-radius: 100px;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  color: #00FFF5;
  z-index: 10;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #00FFF5;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0, 255, 245, 0.4); }
    50% { opacity: 0.8; box-shadow: 0 0 0 8px rgba(0, 255, 245, 0); }
  }

  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
    font-size: 10px;
    padding: 6px 12px;
  }
`;

function Profile() {
  return (
    <Container>
      <ProfileLink
        target="_blank"
        href="https://linkedin.com/in/louis-brent"
        rel="noopener noreferrer"
      >
        <AvatarWrapper>
          <ProfileIMG title="Louis Brent" src="./images/profile.jpg" />
        </AvatarWrapper>
        <StatusBadge>Open to Work</StatusBadge>
      </ProfileLink>
    </Container>
  );
}

export default Profile;
