import React, { FC } from 'react';

import { Meta } from '@surface/ui';
import { Header } from '@surface/ui';

import { StyledPage } from './page.styled';

export const Page: FC = ({ children }) => (
  <>
    <Meta />
    <StyledPage>
      <Header />
      {children}
    </StyledPage>
  </>
);
