// @flow
import React from 'react';
import styled from 'react-emotion';
import art from '../../../../../art.png';
import { BREAKPOINTS } from '../../../../../styles/responsive';

const Container = styled('div')`
  height: 500px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  background-image: url(${art});

  ${BREAKPOINTS.mobile} {
    height: 100vw;
  }
`;

type Props = {};

const ImageBody = () => <Container></Container>;

export default ImageBody;
