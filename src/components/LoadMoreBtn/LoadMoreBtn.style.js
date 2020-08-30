import styled from 'styled-components';

export const LoadMore = styled.div`
  background: #16d47b;
  width: 100%;
  min-height: 50px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 2em;
`;

export const Text = styled.p`
  font-size: 42px;
  padding: 20px;
  font-weight: 700;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;

  }
`;
