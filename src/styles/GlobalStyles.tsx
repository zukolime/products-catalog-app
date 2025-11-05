import styled, { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    color: #2c2b2bdb;
    background-color: #dadada38;   
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const MainContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 15px;

  @media (max-width: 660px) {
    width: 90%;
  }
`;
