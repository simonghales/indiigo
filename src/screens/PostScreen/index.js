// @flow
import React, { useContext } from 'react';
import { useLastLocation } from 'react-router-last-location';
import styled from 'react-emotion';
import { __RouterContext } from 'react-router-dom';
import { gridLayoutCss, maxWidthLayoutCss } from '../../styles/layout';
import ProfileBadge from '../../components/ProfileBadge';
import Post from '../../components/Post/Post';
import TransitionSlider from './components/TransitionSlider';

const Wrapper = styled('div')`
  overflow: hidden;

  &.fade-enter {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.001);
    z-index: 500;
  }

  &.fade-enter.fade-enter-active {
    background: rgba(255, 255, 255, 0);
    transition: background 500ms ease-in;
  }

  &.fade-exit {
    display: none;
  }
`;

const Container = styled('div')`
  ${gridLayoutCss};
  ${maxWidthLayoutCss};

  .fade-enter & {
    opacity: 0;
    transition: opacity 150ms ease 350ms;
  }

  .fade-enter.fade-enter-active & {
    opacity: 1;
  }
`;

const LeftAside = styled('aside')`
  grid-column: span 3;
  padding-right: 30px;
`;

const Main = styled('main')`
  grid-column: span 8;
  min-height: 100vh;
  background-color: #ffffff;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 100%;
    bottom: 0;
    width: 30px;
    background-color: #ffffff;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 100%;
    bottom: 0;
    width: 50vw;
    background-color: #ffffff;
  }
`;

const PostScreen = () => {
  const lastLocation = useLastLocation();
  const animate = lastLocation && lastLocation.pathname === '/';
  return (
    <Wrapper>
      {animate && <TransitionSlider />}
      <Container>
        <LeftAside>
          <section>indiigo</section>
          <section>number of likes</section>
          <ProfileBadge />
        </LeftAside>
        <Main>
          <Post />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default PostScreen;
