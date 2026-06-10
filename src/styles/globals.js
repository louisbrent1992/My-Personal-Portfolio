import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    scroll-padding-top: 8rem;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 1.6rem;
    line-height: 1.6;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;

    /* Faint blueprint grid — infrastructure motif */
    background-image:
      linear-gradient(rgba(148, 180, 200, 0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(148, 180, 200, 0.035) 1px, transparent 1px);
    background-size: 56px 56px;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.surfaceHover};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.textFaint};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.title};
    line-height: 1.15;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyles;
