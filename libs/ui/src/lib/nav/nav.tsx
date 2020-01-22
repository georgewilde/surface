import React, { FC } from 'react';
import Link from 'next/link';

export const Nav: FC = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
  </div>
);
