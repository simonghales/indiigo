// @flow
import React, { useContext } from 'react';
import { useLastLocation } from 'react-router-last-location';
import styled from 'react-emotion';
import { __RouterContext } from 'react-router-dom';
import { css } from 'emotion';
import { gridLayoutCss, maxWidthLayoutCss, mobileSidePadding } from '../../styles/layout';
import ProfileBadge from '../../components/ProfileBadge';
import Post from '../../components/Post/Post';
import TransitionSlider from './components/TransitionSlider';
import SiteLogo from '../../components/SiteLogo';
import PostAside from './components/PostAside';
import { BREAKPOINTS } from '../../styles/responsive';
import PostComments from './components/PostComments';
import {
  routePreviousTransitionEnabledState,
  routeTransitionDisabledState,
} from '../../styles/shared/transitions';

const Wrapper = styled('div')`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  overflow-scrolling: touch;

  &.fade-exit,
  &.fade-enter {
    z-index: 500;

    ${BREAKPOINTS.desktop} {
      background: rgba(255, 255, 255, 0.001);
    }
  }

  &.fade-exit {
    pointer-events: none;

    ${routeTransitionDisabledState} {
      display: none;
    }
  }

  ${BREAKPOINTS.desktop} {
    &.fade-exit.fade-exit-active,
    &.fade-enter.fade-enter-active {
      background: rgba(255, 255, 255, 0);
      transition: background 500ms ease-in;
    }
  }

  ${BREAKPOINTS.mobile} {
    &.fade-enter {
      ${routePreviousTransitionEnabledState} {
        transform: translateX(100vw);
      }
    }
    &.fade-enter.fade-enter-active {
      ${routePreviousTransitionEnabledState} {
        transform: translateX(0);
        transition: transform 450ms ease;
      }
    }

    &.fade-exit {
      transform: translateX(0);
    }

    &.fade-exit.fade-exit-active {
      transition: transform 450ms ease;
      transform: translateX(100vw);
    }
  }
`;

const Container = styled('div')`
  ${BREAKPOINTS.desktop} {
    ${gridLayoutCss};
    ${maxWidthLayoutCss};
  }

  ${BREAKPOINTS.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const LeftAside = styled('div')`
  ${BREAKPOINTS.desktop} {
    grid-column: span 3;
    padding-right: 30px;
  }

  ${BREAKPOINTS.mobile} {
  }

  ${BREAKPOINTS.desktop} {
    .fade-enter & {
      ${routePreviousTransitionEnabledState} {
        opacity: 0;
        transform: translateX(-15px);
      }
    }

    .fade-enter.fade-enter-active & {
      ${routePreviousTransitionEnabledState} {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 300ms ease 400ms, transform 300ms ease 400ms;
      }
    }

    .fade-exit & {
      opacity: 1;
      transform: translateX(0);
    }

    .fade-exit.fade-exit-active & {
      opacity: 0;
      transform: translateX(-15px);
      transition: all 200ms ease;
    }
  }
`;

const Main = styled('main')`
  position: relative;
  ${BREAKPOINTS.desktop} {
    grid-column: span 9;
    min-height: 100vh;
    z-index: 200;
  }

  ${BREAKPOINTS.mobile} {
    background-color: #ffffff;
  }
`;

const MainBackground = styled('div')`
  position: absolute;
  left: -30px;
  top: 0;
  bottom: 0;

  ${BREAKPOINTS.desktop} {
    width: calc(100% + 30px + ((100vw - 1290px) / 2));
  }

  ${BREAKPOINTS.mobile} {
    left: 0;
    right: 0;
    display: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #ffffff;

    .fade-enter & {
      ${routePreviousTransitionEnabledState} {
        opacity: 0;
      }
    }

    .fade-enter.fade-enter-active & {
      ${routePreviousTransitionEnabledState} {
        opacity: 1;
        transition: opacity 150ms ease 400ms;
      }
    }
  }

  ${BREAKPOINTS.desktop} {
    .fade-exit & {
      opacity: 1;
      transform: translateX(0);
    }

    .fade-exit.fade-exit-active & {
      transform: translateX(-100vw);
      opacity: 0;
      transition: transform 600ms ease, opacity 300ms 300ms ease;
    }
  }
`;

const MainContent = styled('div')`
  position: relative;

  ${BREAKPOINTS.desktop} {
    .fade-enter & {
      ${routePreviousTransitionEnabledState} {
        opacity: 0;
      }
    }

    .fade-enter.fade-enter-active & {
      ${routePreviousTransitionEnabledState} {
        opacity: 1;
        transition: opacity 350ms ease 250ms;
      }
    }

    .fade-exit & {
      opacity: 1;
      transition: all 200ms ease;
    }

    .fade-exit.fade-exit-active & {
      opacity: 0;
    }
  }
`;

const commentsClass = css`
  ${mobileSidePadding};
  padding-bottom: 100px;
  ${BREAKPOINTS.desktop} {
    display: none;
  }
`;

const PostScreen = () => {
  const lastLocation = useLastLocation();
  const animate = !!lastLocation;
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
      <PostComments className={commentsClass} />
    </Wrapper>
  );
};

export default PostScreen;
