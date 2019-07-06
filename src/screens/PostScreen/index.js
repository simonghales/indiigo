// @flow
import React, { useContext } from 'react';
import { useLastLocation } from 'react-router-last-location';
import styled from 'react-emotion';
import { __RouterContext } from 'react-router-dom';
import { gridLayoutCss, maxWidthLayoutCss } from '../../styles/layout';
import ProfileBadge from '../../components/ProfileBadge';
import Post from '../../components/Post/Post';
import TransitionSlider from './components/TransitionSlider';
import SiteLogo from '../../components/SiteLogo';
import PostAside from './components/PostAside';

const Wrapper = styled('div')`
  overflow: hidden;

  &.fade-exit,
  &.fade-enter {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.001);
    z-index: 500;
  }

  &.fade-exit {
    pointer-events: none;
  }

  &.fade-exit.fade-exit-active,
  &.fade-enter.fade-enter-active {
    background: rgba(255, 255, 255, 0);
    transition: background 500ms ease-in;
  }
`;

const Container = styled('div')`
  ${gridLayoutCss};
  ${maxWidthLayoutCss};
`;

const LeftAside = styled('div')`
  grid-column: span 3;
  padding-right: 30px;

  .fade-enter & {
    opacity: 0;
    transform: translateY(-15px);
  }

  .fade-enter.fade-enter-active & {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms ease 400ms, transform 300ms ease 400ms;
  }

  .fade-exit & {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-exit.fade-exit-active & {
    opacity: 0;
    transform: translateY(-15px);
    transition: all 200ms ease;
  }
`;

const Main = styled('main')`
  grid-column: span 9;
  min-height: 100vh;
  position: relative;
`;

const MainBackground = styled('div')`
  position: absolute;
  left: -30px;
  top: 0;
  bottom: 0;
  width: calc(100% + 30px + ((100vw - 1290px) / 2));

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #ffffff;

    .fade-enter & {
      opacity: 0;
    }

    .fade-enter.fade-enter-active & {
      opacity: 1;
      transition: opacity 150ms ease 400ms;
    }
  }

  .fade-exit & {
    opacity: 1;
    transform: translateX(0);
  }

  .fade-exit.fade-exit-active & {
    transform: translateX(-100vw);
    opacity: 0;
    transition: transform 600ms ease, opacity 300ms 300ms ease;
  }
`;

const MainContent = styled('div')`
  position: relative;
  .fade-enter & {
    opacity: 0;
  }

  .fade-enter.fade-enter-active & {
    opacity: 1;
    transition: opacity 350ms ease 250ms;
  }

  .fade-exit & {
    opacity: 1;
    transition: all 200ms ease;
  }

  .fade-exit.fade-exit-active & {
    opacity: 0;
  }
`;

const PostScreen = () => {
  const lastLocation = useLastLocation();
  const animate = lastLocation && lastLocation.pathname === '/';
  return (
    <Wrapper>
      <Container>
        <LeftAside>
          <PostAside />
        </LeftAside>
        <Main>
          <MainBackground>{animate && <TransitionSlider />}</MainBackground>
          <MainContent>
            <Post />
          </MainContent>
        </Main>
      </Container>
    </Wrapper>
  );
};

export default PostScreen;
