import React, { FC } from 'react';

import { Idea } from '@surface/api-interfaces';

interface IdeaListProps {
  ideas: Idea[];
}

export const IdeaList: FC<IdeaListProps> = ({ ideas }) => (
  <>
    <ul>
      {ideas.map(idea => (
        <li key={idea.id}>{idea.title}</li>
      ))}
    </ul>
  </>
);
