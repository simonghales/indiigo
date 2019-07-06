// @flow
import React from 'react';
import styled from 'react-emotion';
import Comment from './components/Comment';

const CommentWrapper = styled('div')`
  &:not(:first-child) {
    margin-top: 12px;
  }
`;

const RepliesWrapper = styled('div')`
  margin-top: 12px;
  padding-left: 30px;
`;

const Comments = () => (
  <div>
    <CommentWrapper>
      <Comment />
      <RepliesWrapper>
        <CommentWrapper>
          <Comment />
        </CommentWrapper>
        <CommentWrapper>
          <Comment />
        </CommentWrapper>
      </RepliesWrapper>
    </CommentWrapper>
    <CommentWrapper>
      <Comment />
      <RepliesWrapper>
        <CommentWrapper>
          <Comment />
          <RepliesWrapper>
            <CommentWrapper>
              <Comment />
            </CommentWrapper>
          </RepliesWrapper>
        </CommentWrapper>
        <CommentWrapper>
          <Comment />
        </CommentWrapper>
      </RepliesWrapper>
    </CommentWrapper>
  </div>
);

export default Comments;
