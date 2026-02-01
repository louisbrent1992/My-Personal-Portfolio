import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-track {
        background: ${(props) => props.theme.colors.background1}; 
    }
    ::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #00FFF5 0%, #7B42F6 50%, #FF00E5 100%);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #FF00E5 0%, #7B42F6 50%, #00FFF5 100%);
    }
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;
    overflow-x: hidden;
    
    /* Animated gradient mesh background */
    &::before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -2;
      background: 
        radial-gradient(ellipse 80% 50% at 20% 40%, rgba(0, 255, 245, 0.15), transparent),
        radial-gradient(ellipse 60% 40% at 80% 20%, rgba(255, 0, 229, 0.12), transparent),
        radial-gradient(ellipse 70% 70% at 50% 80%, rgba(123, 66, 246, 0.15), transparent),
        radial-gradient(ellipse 40% 60% at 90% 70%, rgba(0, 255, 245, 0.08), transparent);
      animation: meshMove 20s ease infinite;
    }

    /* Floating orbs */
    &::after {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
      background: 
        radial-gradient(circle at 10% 20%, rgba(123, 66, 246, 0.3) 0%, transparent 20%),
        radial-gradient(circle at 90% 80%, rgba(0, 255, 245, 0.2) 0%, transparent 15%),
        radial-gradient(circle at 50% 50%, rgba(255, 0, 229, 0.1) 0%, transparent 25%);
      animation: orbFloat 15s ease-in-out infinite alternate;
      pointer-events: none;
    }

    @keyframes meshMove {
      0% { transform: scale(1) rotate(0deg); }
      25% { transform: scale(1.05) rotate(1deg); }
      50% { transform: scale(1.1) rotate(-1deg); }
      75% { transform: scale(1.05) rotate(1deg); }
      100% { transform: scale(1) rotate(0deg); }
    }

    @keyframes orbFloat {
      0% { transform: translate(0, 0) scale(1); opacity: 0.8; }
      50% { transform: translate(20px, -20px) scale(1.1); opacity: 1; }
      100% { transform: translate(-10px, 10px) scale(0.95); opacity: 0.7; }
    }
  }

  /* Noise texture overlay */
  body::selection {
    background: rgba(123, 66, 246, 0.5);
    color: #fff;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: ${(props) => props.theme.fonts.title};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      color: ${(props) => props.theme.colors.accent1};
      text-shadow: 0 0 20px rgba(0, 255, 245, 0.5);
    }
  }

  li {
    list-style: none;
  }

  /* Animated gradient text utility */
  .gradient-text {
    background: ${(props) => props.theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Glass effect utility */
  .glass {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* Glow effect utility */
  .glow {
    box-shadow: 0 0 40px rgba(123, 66, 246, 0.3);
  }

  /* Floating animation */
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(2deg); }
  }

  /* Pulse animation */
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
  }

  /* Shimmer animation for buttons */
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  /* Gradient border animation */
  @keyframes borderGradient {
    0% { border-color: #00FFF5; box-shadow: 0 0 20px rgba(0, 255, 245, 0.3); }
    33% { border-color: #7B42F6; box-shadow: 0 0 20px rgba(123, 66, 246, 0.3); }
    66% { border-color: #FF00E5; box-shadow: 0 0 20px rgba(255, 0, 229, 0.3); }
    100% { border-color: #00FFF5; box-shadow: 0 0 20px rgba(0, 255, 245, 0.3); }
  }
`;

export default GlobalStyles;
