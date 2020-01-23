import { createGlobalStyle } from 'styled-components';

import { theme } from './theme-dark';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: lato, sans-serif;
    background-color: ${theme.background};
  }
`;
