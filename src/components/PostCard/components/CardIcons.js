// @flow
import React from 'react';
import { FaImage, FaMusic, FaParagraph, FaVideo } from 'react-icons/fa';
import styled from 'react-emotion';

const Container = styled('div')`
  display: flex;
  color: #d6d4e8;
  position: relative;
  top: 1px;
`;

const Icon = styled('div')`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

const CardIcons = () => (
  <Container>
    <Icon>
      <FaImage size={14} />
    </Icon>
    <Icon>
      <FaParagraph />
    </Icon>
    <Icon>
      <FaMusic />
    </Icon>
    <Icon>
      <FaVideo size={14} />
    </Icon>
  </Container>
);

export default CardIcons;
