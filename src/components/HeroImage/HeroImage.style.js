import styled from 'styled-components';

export const RmdbImage = styled.div`
  background-size: 100%, cover !important;
  background-position: center, center !important;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 37.5em;
  position: relative;
  animation: animateHeroimage 1s;
  @keyframes animateHeroimage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const RmdbContent = styled.div`
  max-width: 80em;
  padding: 1.2em;
  margin: 0 auto;
`;

export const RmdbText = styled.div`
  z-index: 100;
  max-width: 43.75em;
  position: absolute;
  bottom: 2.5em;
  margin-right: 2.5em;
  min-height: 6.25em;
  background: rgba(0, 0, 0, 0);
  color: #fff;
  @media screen and (max-width: 720px) {
    .rmdb-heroimage-text {
      max-width: 100%;
    }
  }
`;

export const RmdbHeading = styled.h1`
  font-family: 'Nunito', sans-serif;
  color: #fff;
  font-size: 4rem;
  margin-bottom: 0.5em;
  @media screen and (max-width: 720px) {
    font-size: 2.375rem;
    color: #fff;
  }
`;

export const RmdbPg = styled.p`
  font-size: 2rem;
  color: #fff;
  @media screen and (max-width: 720px) {
    font-size: 1.25rem;
    color: #fff;
  }
`;
