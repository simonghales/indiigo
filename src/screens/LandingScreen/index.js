// @flow
import React from 'react';
import styled from 'react-emotion';
import { gridLayoutCss, maxWidthLayoutCss } from '../../styles/layout';
import PostCard from '../../components/PostCard';

const Container = styled('div')`
  ${gridLayoutCss};
  ${maxWidthLayoutCss};

  &.fade-exit {
    opacity: 1;
    transition: opacity 200ms 50ms ease;
    pointer-events: none;
  }

  &.fade-exit.fade-exit-active {
    opacity: 0;
  }

  &.fade-enter {
    opacity: 0;
    pointer-events: none;
  }

  &.fade-enter.fade-enter-active {
    transition: all 400ms 300ms ease;
    opacity: 1;
  }
`;

const Newsfeed = styled('section')`
  grid-column: 2 / span 8;
`;

const NewsfeedItem = styled('div')`
  margin: 80px 0;
`;

const LandingScreen = () => (
  <Container>
    <Newsfeed>
      {Array.from({ length: 5 }).map((item, index) => (
        <NewsfeedItem key={index.toString()}>
          <PostCard />
        </NewsfeedItem>
      ))}
    </Newsfeed>
  </Container>
);

export default LandingScreen;
