import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  padding: 5px;
  color: ${props => props.theme.colors.text};
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: ${props => props.theme.colors.primary};
`;

export const StyledSecondaryButton = styled(StyledButton)`
  background-color: ${props => props.theme.colors.secondary};
`;
