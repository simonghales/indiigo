// @flow
import React from 'react';
import styled from 'react-emotion';
import { gridLayoutCss, maxWidthLayoutCss, mobileSidePadding } from '../../styles/layout';
import PostCard from '../../components/PostCard';
import { BREAKPOINTS } from '../../styles/responsive';
import {
  routePreviousTransitionEnabledState,
  routeTransitionDisabledState,
  routeTransitionEnabledState,
} from '../../styles/shared/transitions';
import PostsList from '../../components/PostsList';

const Container = styled('div')`
  ${mobileSidePadding};
  ${BREAKPOINTS.desktop} {
    ${gridLayoutCss};
    ${maxWidthLayoutCss};
  }

  &.fade-exit {
    ${routeTransitionDisabledState} {
      display: none;
    }

    opacity: 1;
    pointer-events: none;

    ${BREAKPOINTS.mobile} {
      transform: translateX(0);
    }
  }

  ${routeTransitionEnabledState} {
    &.fade-exit.fade-exit-active {
      opacity: 0;
      transition: opacity 200ms 50ms ease;

      ${BREAKPOINTS.mobile} {
        transform: translateX(-100vw);
        transition: all 450ms ease;
      }
    }
  }

  &.fade-enter {
    ${routePreviousTransitionEnabledState} {
      opacity: 0;
      pointer-events: none;

      ${BREAKPOINTS.mobile} {
        transform: translateX(-100vw);
      }
    }
  }

  &.fade-enter.fade-enter-active {
    ${routePreviousTransitionEnabledState} {
      transition: all 400ms 300ms ease;
      opacity: 1;
      ${BREAKPOINTS.mobile} {
        transform: translateX(0);
        transition: all 500ms ease;
      }
    }
  }
`;

const Newsfeed = styled('section')`
  grid-column: 2 / span 8;
`;

const LandingScreen = () => (
  <Container>
    <Newsfeed>
      <PostsList />
    </Newsfeed>
  </Container>
);

export default LandingScreen;
