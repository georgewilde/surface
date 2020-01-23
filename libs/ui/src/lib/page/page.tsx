import React, { FC } from 'react';

import { Meta } from '@surface/ui';
import { Header } from '@surface/ui';

import { StyledMain, StyledPage } from './page.styled';

export const Page: FC = ({ children }) => (
  <>
    <Meta />
    <StyledPage>
      <Header />
      <StyledMain>{children}</StyledMain>
    </StyledPage>
  </>
);
