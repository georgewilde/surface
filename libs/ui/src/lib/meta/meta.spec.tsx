import React from 'react';
import { render } from '@testing-library/react';

import { Meta } from './meta';

describe('Meta', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Meta />);
    expect(baseElement).toBeTruthy();
  });
});
