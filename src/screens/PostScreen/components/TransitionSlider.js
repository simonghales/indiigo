// @flow
import React from 'react';
import styled from 'react-emotion';
import { animated, useSpring } from 'react-spring';
import { css } from 'emotion';
import { BREAKPOINTS } from '../../../styles/responsive';

const blobClass = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  visibility: hidden;

  .fade-enter & {
    visibility: visible;
  }
`;

const desktopClass = css`
  ${blobClass};
  ${BREAKPOINTS.mobile} {
    display: none;
  }
`;

const mobileClass = css`
  ${blobClass};
  ${BREAKPOINTS.desktop} {
    display: none;
  }
`;

const config = {
  mass: 1,
  tension: 490,
  friction: 50,
};

const TransitionSlider = () => {
  const props = useSpring({
    config,
    from: {
      transform: 'translate3d(-100vw, 0, 0)',
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  });
  const mobile = useSpring({
    config,
    from: {
      height: '0%',
      transform: 'translate3d(0, -50vh, 0)',
    },
    to: {
      height: '100%',
      transform: 'translate3d(0, 0, 0)',
    },
  });
  return (
    <React.Fragment>
      <animated.div className={desktopClass} style={props} />
      <animated.div className={mobileClass} style={mobile} />
    </React.Fragment>
  );
};

export default TransitionSlider;
