// @flow
import React from 'react';
import styled from 'react-emotion';
import art from '../../../../../art.png';

const Container = styled('div')`
  height: 500px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  background-image: url(${art});
`;

type Props = {};

const ImageBody = () => <Container></Container>;

export default ImageBody;
