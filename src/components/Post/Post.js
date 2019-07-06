// @flow
import React from 'react';
import styled from 'react-emotion';
import { largeHeadingCss } from '../../styles/typography';

const Container = styled('div')`
  padding: 84px 30px 30px 30px;
`;

const Heading = styled('h1')`
  ${largeHeadingCss};
`;

const Post = () => (
  <Container>
    <header>
      <Heading>Post title goes here</Heading>
    </header>
  </Container>
);

export default Post;
