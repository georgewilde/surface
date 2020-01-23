import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../src/lib/theme/theme-dark';

export const ThemeDecorator = story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
);
