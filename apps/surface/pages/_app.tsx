import React from 'react';
import App from 'next/app';

import { Page } from '@surface/ui';

class SurfaceApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Page>
        <Component />
      </Page>
    );
  }
}

export default SurfaceApp;
