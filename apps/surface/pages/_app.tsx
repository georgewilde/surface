import React from 'react';
import App from 'next/app';

import { Page, Theme } from '@surface/ui';

class SurfaceApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Theme>
        <Page>
          <Component />
        </Page>
      </Theme>
    );
  }
}

export default SurfaceApp;
