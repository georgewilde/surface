import React, { FC } from 'react';
import Link from 'next/link';

import { StyledNav } from './nav.styled';

export const Nav: FC = () => (
  <StyledNav>
    <Link href="/">
      <a>Ideas</a>
    </Link>
    <Link href="/users">
      <a>Users</a>
    </Link>
    <Link href="/account">
      <a>My Account</a>
    </Link>
  </StyledNav>
);
