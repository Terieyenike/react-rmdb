import styled from 'styled-components';

export const RmdbMovieInfo = styled.div`
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  height: 600px;
  padding: 40px 20px;
  box-sizing: border-box;
  animation: animateMovieinfo 1s;
  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const RmdbMovieInfoContent = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: rgb(0, 0, 0, 0.7);
  position: relative;
`;

export const RmdbMovieInfoThumb = styled.div`
  width: 350px;
  height: 100%;
  overflow: hidden;
  position: absolute;
  left: 0px;
`;

export const RmdbMovieInfoText = styled.div`
  height: 100%;
  width: auto;
  padding: 40px;
  color: #fff;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  left: 360px;
  h1 {
    font-family: Nunito, sans-serif;
    font-size: 48px;
    margin: 0;
  }
  h3 {
    font-family: Nunito, sans-serif;
    font-size: 16px;
    line-height: 0;
    margin-top: 30px;
  }
  p {
    font-size: 18px;
  }
`;

export const RmdbRating = styled.div`
  width: 250px;
  height: 20px;
  margin-top: 20px;
  position: relative;
`;

export const RmdbScore = styled.p`
  position: absolute;
  margin: 0;
  right: 0px;
  top: -3px;
`;

export const RmdbDirector = styled.p`
  margin: 0;
`;
