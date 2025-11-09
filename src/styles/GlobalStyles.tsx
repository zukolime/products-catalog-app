import styled, { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;    
    padding: 0;
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
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  img {
    display: block;
    width: 100%;
  }
    
`;

export const MainContainer = styled.div`
  width: 70%;
  margin: 16px auto;

  @media (max-width: 660px) {
    width: 90%;
  }
`;
