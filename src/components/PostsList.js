// @flow
import React from 'react';
import styled from 'react-emotion';
import PostCard from './PostCard';
import { BREAKPOINTS } from '../styles/responsive';

const Item = styled('div')`
  margin: 80px 0;

  ${BREAKPOINTS.mobile} {
    margin: 50px 0;
  }
`;

const PostsList = () => (
  <div>
    {Array.from({ length: 5 }).map((item, index) => (
      <Item key={index.toString()}>
        <PostCard />
      </Item>
    ))}
  </div>
);

export default PostsList;
