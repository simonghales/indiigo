// @flow
import React from 'react';
import styled from 'react-emotion';
import { animated, useSpring } from 'react-spring';
import { css } from 'emotion';

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
  return <animated.div className={blobClass} style={props} />;
};

export default TransitionSlider;
