import React, { FC } from 'react';

import { StyledPrimaryButton, StyledSecondaryButton } from './button.styled';

interface ButtonProps {
  styled: 'primary' | 'secondary';
  text: string;
}

export const Button: FC<ButtonProps> = ({ styled, text }) => (
  <>
    {styled === 'primary' && <StyledPrimaryButton>{text}</StyledPrimaryButton>}
    {styled === 'secondary' && (
      <StyledSecondaryButton>{text}</StyledSecondaryButton>
    )}
  </>
);
