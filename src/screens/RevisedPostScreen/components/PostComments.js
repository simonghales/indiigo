// @flow
import React from 'react';
import styled from 'react-emotion';
import CommentsList from '../../../components/revised/CommentsList';

const Container = styled('div')`
  padding-top: 30px;
`;

type Props = {};

const PostComments = () => (
  <Container>
    <CommentsList numberOfComments={4} />
  </Container>
);

export default PostComments;
