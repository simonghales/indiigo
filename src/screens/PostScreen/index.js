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
`;

const LeftAside = styled('aside')`
  grid-column: span 3;
  padding-right: 30px;

  .fade-enter & {
    opacity: 0;
    transform: translateY(-15px);
    transition: opacity 300ms ease 400ms, transform 300ms ease 400ms;
  }

  .fade-enter.fade-enter-active & {
    opacity: 1;
    transform: translateY(0);
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
      transition: opacity 150ms ease 400ms;
    }

    .fade-enter.fade-enter-active & {
      opacity: 1;
    }
  }
`;

const MainContent = styled('div')`
  position: relative;
  .fade-enter & {
    opacity: 0;
    transition: opacity 350ms ease 250ms;
  }

  .fade-enter.fade-enter-active & {
    opacity: 1;
  }
`;

const PostScreen = () => {
  const lastLocation = useLastLocation();
  const animate = lastLocation && lastLocation.pathname === '/';
  return (
    <Wrapper>
      <Container>
        <LeftAside>
          <section>indiigo</section>
          <section>number of likes</section>
          <ProfileBadge />
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
