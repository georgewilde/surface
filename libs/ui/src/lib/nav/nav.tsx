import React, { FC } from 'react';
import Link from 'next/link';

export const Nav: FC = () => (
  <div>
    <Link href="/">
      <a>Link 1</a>
    </Link>
    <Link href="/">
      <a>Link 2</a>
    </Link>
  </div>
);
