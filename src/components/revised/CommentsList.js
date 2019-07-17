// @flow
import React from 'react';
import styled from 'react-emotion';
import Comment from '../Comments/components/Comment';

const Container = styled('div')``;

const CommentWrapper = styled('div')`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const RepliesWrapper = styled('div')`
  padding: 15px 0 0 20px;
`;

type Props = {
  numberOfComments: number,
};

const CommentsList = ({ numberOfComments }: Props) => (
  <Container>
    {Array.from({ length: numberOfComments }).map((item, index) => (
      <CommentWrapper key={index.toString()}>
        <Comment />
        {numberOfComments > 2 && (
          <RepliesWrapper>
            <CommentsList numberOfComments={numberOfComments - 2} />
          </RepliesWrapper>
        )}
      </CommentWrapper>
    ))}
  </Container>
);

export default CommentsList;
