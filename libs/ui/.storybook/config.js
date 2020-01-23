import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { ThemeDecorator } from './decorators/theme';

addDecorator(withKnobs);
addDecorator(ThemeDecorator);

configure(require.context('../src/lib', true, /\.stories\.tsx?$/), module);
