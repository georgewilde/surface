import { createGlobalStyle } from 'styled-components';

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'lato';
    src: url('/static/fonts/Lato-Light.ttf') format('ttf');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'lato';
    src: url('/static/fonts/Lato-Regular.ttf') format('ttf');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'lato';
    src: url('/static/fonts/Lato-Italic.ttf') format('ttf');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'lato';
    src: url('/static/fonts/Lato-Bold.ttf') format('ttf');
    font-weight: 700;
    font-style: normal;
  }
`;
