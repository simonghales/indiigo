// @flow
import React from 'react';
import styled from 'react-emotion';
import PostsList from '../../components/PostsList';
import { BREAKPOINTS } from '../../styles/responsive';
import { gridLayoutCss, maxWidthLayoutCss } from '../../styles/layout';
import ProfileIntro from './components/ProfileIntro';

const Container = styled('div')`
  ${BREAKPOINTS.desktop} {
    ${gridLayoutCss};
    ${maxWidthLayoutCss};
  }
`;

const UsersFeed = styled('div')`
  grid-column: 2 / span 8;
`;

const ProfileScreen = () => (
  <div>
    <ProfileIntro />
    <Container>
      <UsersFeed>
        <PostsList />
      </UsersFeed>
    </Container>
  </div>
);

export default ProfileScreen;
