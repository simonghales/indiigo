// @flow
import React from 'react';
import styled from 'react-emotion';
import Comments from '../../../components/Comments/Comments';

const Container = styled('div')`
  margin-top: 15px;
`;

const PostComments = ({ ...otherProps }) => (
  <Container {...otherProps}>
    <Comments />
  </Container>
);

export default PostComments;
