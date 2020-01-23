import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface IdeasProps {}

const StyledIdeas = styled.div`
  color: pink;
`;

export const Ideas = (props: IdeasProps) => {
  return (
    <StyledIdeas>
      <h1>Welcome to ideas component!</h1>
    </StyledIdeas>
  );
};

export default Ideas;
