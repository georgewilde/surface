import React, { FC } from 'react';

import { StyledPrimaryButton, StyledSecondaryButton } from './button.styled';

interface ButtonProps {
  style: 'primary' | 'secondary';
  text: string;
}

export const Button: FC<ButtonProps> = ({ style, text }) => (
  <>
    {style === 'primary' && <StyledPrimaryButton>{text}</StyledPrimaryButton>}
    {style === 'secondary' && (
      <StyledSecondaryButton>{text}</StyledSecondaryButton>
    )}
  </>
);
