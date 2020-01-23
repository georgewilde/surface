import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './button';

storiesOf('button', module)
  .add('Primary', () => <Button style="primary" text="Login in" />)
  .add('Secondary', () => <Button style="secondary" text="Login in" />);
