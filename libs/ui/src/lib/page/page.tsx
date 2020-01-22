import React, { FC } from 'react';

import { Meta } from '@surface/ui';
import { Header } from '@surface/ui';

export const Page: FC = ({ children }) => (
  <>
    <Meta />
    <Header />
    {children}
  </>
);
