// @flow
import React from 'react';
import styled from 'react-emotion';

const Container = styled('div')`
  padding: 84px 30px 30px 30px;
`;

const Post = () => (
  <Container>
    <header>
      <h1>Post title goes here</h1>
    </header>
  </Container>
);

export default Post;
