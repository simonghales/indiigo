// @flow
import React from 'react';
import UilHeart from '@iconscout/react-unicons/icons/uil-heart';
import UilComment from '@iconscout/react-unicons/icons/uil-comment';
import styled from 'react-emotion';
import PostCard from './PostCard';

const Container = styled('section')`
  padding-left: 25px;
  margin-top: 80px;
`;

const Item = styled('div')`
  margin-top: 60px;
`;

const NewsFeed = () => (
  <Container>
    {Array.from({ length: 5 }).map((item, index) => (
      <Item key={index.toString()}>
        <PostCard />
      </Item>
    ))}
  </Container>
);

export default NewsFeed;
