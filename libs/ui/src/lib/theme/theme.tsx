import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { theme } from './theme-dark';
import { GlobalStyle } from './global-style';
import { GlobalFonts } from './fonts';

// import 'styled-components';
//
// declare module 'styled-components' {
//   export interface DefaultTheme {
//     color: {
//       background: string;
//       border: string;
//       text: string;
//       link: string;
//       linkHover: string;
//       primary: string;
//       secondary: string;
//       tertiary: string;
//     };
//     maxWidth: string;
//     boxShadow: string;
//   }
// }
//

export const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    <GlobalFonts />
    {children}
  </ThemeProvider>
);
