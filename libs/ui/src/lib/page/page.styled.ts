import styled from 'styled-components';

export const StyledPage = styled.div`
  color: ${props => props.theme.colors.text};
`;

export const StyledMain = styled.main`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 20px;
`;
