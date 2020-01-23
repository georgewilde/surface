import { createGlobalStyle } from 'styled-components';

import { theme } from './theme-dark';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: lato, sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  a {
    color: ${theme.colors.link};
    text-decoration: none;

    &:hover {
      color: ${theme.colors.linkHover};
      text-decoration: none;
    }
  }
`;
