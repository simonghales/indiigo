// @flow
import React from 'react';
import styled from 'react-emotion';
import { BREAKPOINTS } from '../styles/responsive';

const Container = styled('div')`
  display: flex;
`;

const AsideWrapper = styled('div')`
  min-height: 100vh;
  width: 230px;
  background-color: #ffffff;
  position: relative;
  border-right: 1px solid #f6f4f7;

  ${BREAKPOINTS.mobile} {
    display: none;
  }
`;

const Aside = styled('aside')`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 230px;
`;

const MainContent = styled('section')`
  flex: 1;
  min-height: 100vh;
  background-color: #ffffff;
`;

type Props = {
  aside: any,
  children: any,
};

const MainLayout = ({ aside, children }: Props) => (
  <Container>
    <AsideWrapper>
      <Aside>{aside}</Aside>
    </AsideWrapper>
    <MainContent>{children}</MainContent>
  </Container>
);

export default MainLayout;
