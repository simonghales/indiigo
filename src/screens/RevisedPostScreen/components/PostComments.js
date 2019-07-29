// @flow
import React from 'react';
import styled from 'react-emotion';
import CommentsList from '../../../components/revised/CommentsList';
import { BREAKPOINTS } from '../../../styles/responsive';

const Container = styled('div')`
  ${BREAKPOINTS.desktop} {
    padding-top: 30px;
  }
`;

type Props = {};

const PostComments = () => (
  <Container>
    <CommentsList numberOfComments={4} />
  </Container>
);

export default PostComments;
