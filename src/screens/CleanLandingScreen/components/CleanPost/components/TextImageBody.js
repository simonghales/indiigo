// @flow
import React from 'react';
import styled from 'react-emotion';
import TextBody from './TextBody';
import boys from '../../../../../boys.jpg';

const Image = styled('div')`
  height: 200px;
  background-color: grey;
  border-radius: 4px 4px 0 0;
  background-size: cover;
  background-position: center;
  background-image: url(${boys});
`;

type Props = {};

const TextImageBody = () => (
  <div>
    <Image />
    <TextBody />
  </div>
);

export default TextImageBody;
