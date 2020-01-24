import React, { FC } from 'react';

import { Idea } from '@surface/api-interfaces';
import {
  StyledIdeaList,
  StyledListItem,
  StyledTitle,
  StyledVoteCount
} from './idea-list.styled';

interface IdeaListProps {
  ideas: Idea[];
}

export const IdeaList: FC<IdeaListProps> = ({ ideas }) => (
  <>
    <StyledIdeaList>
      {ideas.map(idea => (
        <StyledListItem key={idea.id}>
          <StyledVoteCount>{idea.voteCount}</StyledVoteCount>
          <StyledTitle>{idea.title}</StyledTitle>
        </StyledListItem>
      ))}
    </StyledIdeaList>
  </>
);
