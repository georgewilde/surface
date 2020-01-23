import React, { FC } from 'react';

import { Idea } from '@surface/api-interfaces';
import { IdeaList } from '@surface/ideas';

// TODO: Get data from a database.
const ideas: Idea[] = [
  {
    id: 'bb309eff-7d77-4d9a-9727-125162ac0d34',
    title: 'Create an awesome voting tool',
    description: `The tool needs to allow the company to see what really matters to it's employees`
  },
  {
    id: '4682c455-ee15-4323-9740-cbeaf6d06fc2',
    title: 'Hold monthly company-wide retros',
    description: `It would be great to have a place where someone from each team could represent that team and bring up positives and negatives to the whole company`
  }
];

export const Index: FC = () => (
  <>
    <h1>Ideas</h1>
    <IdeaList ideas={ideas}></IdeaList>
  </>
);

export default Index;
