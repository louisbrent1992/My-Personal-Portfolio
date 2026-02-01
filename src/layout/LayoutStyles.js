import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;

  main {
    padding-top: 80px; /* Account for fixed header */
  }
`;
