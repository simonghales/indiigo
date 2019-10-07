// @flow
import React from 'react';
import styled from 'react-emotion';
import { FaAngleDown } from 'react-icons/fa';
import {
  CleanImagePost,
  CleanTextImagePost,
  CleanTextPost,
} from '../../screens/CleanLandingScreen/components/CleanPost/CleanPost';
import SiteHeader, { headerHeight, mobileHeaderHeight } from './components/SiteHeader/SiteHeader';
import { BREAKPOINTS } from '../../styles/responsive';

const Wrapper = styled('div')`
  color: #242435;
  min-height: 100vh;
  background-color: #fcfcfd;
  font-family: 'Roboto';
  overflow: hidden;
`;

const Main = styled('main')`
  padding-top: ${headerHeight}px;
  margin-bottom: 200px;

  ${BREAKPOINTS.mobile} {
    padding-top: ${mobileHeaderHeight}px;
    margin-bottom: 50px;
  }
`;

type Props = {
  children: any,
};

const CleanPostLayout = ({ children }: Props) => (
  <Wrapper>
    <section>
      <SiteHeader />
      <Main>{children}</Main>
    </section>
  </Wrapper>
);

export default CleanPostLayout;
