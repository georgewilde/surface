import styled from 'styled-components';

export const StyledIdeaList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 20px;
  border: 1px solid ${props => props.theme.colors.border};
  background-color: #333333;
  cursor: pointer;

  &:hover {
    background-color: #222222;
  }
`;

export const StyledVoteCount = styled.span`
  font-size: 3rem;
  margin-right: 20px;
  color: ${props => props.theme.colors.primary};
`;

export const StyledTitle = styled.span``;
