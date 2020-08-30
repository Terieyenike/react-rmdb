import styled from 'styled-components';

export const RmdbGrid = styled.div`
  h1 {
    font-family: Nunito, sans-serif;
    font-size: 2.6rem;
    margin: 1em 0;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.375rem;
    }
  }
`;

export const RmdbGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
  position: relative;
  grid-auto-flow: dense;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  /* @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  } */
`;

export const RmdbGridElement = styled.div`
  /* background: #353535; */
  max-height: auto;
  animation: animateGrid 0.5s;
  overflow: hidden;
  @keyframes animateGrid {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
