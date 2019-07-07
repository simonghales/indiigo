// @flow
import React from 'react';
import styled from 'react-emotion';
import PostsList from '../../components/PostsList';
import { BREAKPOINTS } from '../../styles/responsive';
import { gridLayoutCss, maxWidthLayoutCss, mobileSidePadding } from '../../styles/layout';
import ProfileIntro from './components/ProfileIntro';
import { siteBgColor } from '../../styles/colors';

const Wrapper = styled('div')`
  background-color: ${siteBgColor};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  overflow-scrolling: touch;
`;

const Container = styled('div')`
  ${BREAKPOINTS.desktop} {
    ${gridLayoutCss};
    ${maxWidthLayoutCss};
  }
`;

const UsersFeed = styled('div')`
  ${mobileSidePadding};
  grid-column: 2 / span 8;
`;

const ProfileScreen = () => (
  <Wrapper>
    <ProfileIntro />
    <Container>
      <UsersFeed>
        <PostsList />
      </UsersFeed>
    </Container>
  </Wrapper>
);

export default ProfileScreen;
