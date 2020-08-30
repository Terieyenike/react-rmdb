import styled from 'styled-components';

export const RmdbSearch = styled.div`
  width: 100%;
  height: 6.56em;
  background: #1c1c1c;
  position: relative;
  padding: 1.56em 1.25em 0px 1.25em;
  box-sizing: border-box;
  color: #fff;
`;

export const RmdbSearchContent = styled.div`
  max-width: 80em;
  width: 100%;
  height: 3.43em;
  background: #353535;
  margin: 0 auto;
  border-radius: 2.5em;
  position: relative;
  color: #fff;
`;

export const RmdbInput = styled.input`
  font-size: 38px;
  position: relative;
  margin: 8px 0 0 60px;
  border: 0;
  background: transparent;
  height: 40px;
  width: 90%;
  color: #fff;

  &:focus {
    outline: none;
  }
  @media screen and (max-width: 720px) {
    margin: 8px 0 0 60px;
    font-size: 1rem;
    color: #fff;
    width: 100%;
  }
`;
