// @flow
import React from 'react';
import styled from 'react-emotion';

const Container = styled('div')`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 28px;
    left: 20px;
    right: 20px;
    bottom: 0;
    box-shadow: 0 6px 24px 0 rgba(38, 49, 65, 0.05);
    border-radius: 4px;
  }
`;

const Content = styled('div')`
  position: relative;
`;

type Props = {
  children: any,
};

const BackShadow = ({ children }: Props) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);

export default BackShadow;
