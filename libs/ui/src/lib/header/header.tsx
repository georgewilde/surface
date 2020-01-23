import React, { FC } from 'react';
import Link from 'next/link';

import { Nav } from '@surface/ui';
import { StyledHeader, StyledLogo } from './header.styled';

export const Header: FC = () => (
  <StyledHeader>
    <Link href="/">
      <a>
        <StyledLogo src="/static/images/logo.svg" alt="Surface home page" />
      </a>
    </Link>
    <Nav />
  </StyledHeader>
);
