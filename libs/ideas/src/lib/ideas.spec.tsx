import React from 'react';
import { render } from '@testing-library/react';

import Ideas from './ideas';

describe(' Ideas', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ideas />);
    expect(baseElement).toBeTruthy();
  });
});
