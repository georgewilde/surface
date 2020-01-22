import React, { FC } from 'react';
import Head from 'next/head';

export const Meta: FC = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <title>Surface</title>
  </Head>
);
