// @flow
import React from 'react';
import styled from 'react-emotion';
import UilBars from '@iconscout/react-unicons/icons/uil-bars';
import { css } from 'emotion';
import NewsFeed from './components/NewsFeed';
import MainLayout from '../../components/MainLayout';
import Sidebar from '../../components/Sidebar';

const SideNav = styled('nav')`
  padding: 0 30px;
  margin-top: 25px;
`;

const NavSection = styled('section')`
  &:not(:first-child) {
    margin-top: 40px;
  }
`;

const NavHeading = styled('h4')`
  font-weight: 600;
  font-size: 13px;
  color: #a4a7c6;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const NavItem = styled('li')`
  margin-top: 4px;

  a {
    font-weight: 600;
    font-size: 15px;
    color: #a4a7c6;
  }
`;

const selectedNavItemClass = css`
  a {
    font-weight: 700;
    color: #74779c;
  }
`;

const RevisedLandingScreen = () => (
  <MainLayout
    aside={
      <Sidebar>
        <SideNav>
          <NavSection>
            <NavHeading>Feeds</NavHeading>
            <ul>
              <NavItem className={selectedNavItemClass}>
                <a>Popular</a>
              </NavItem>
              <NavItem>
                <a>Custom</a>
              </NavItem>
            </ul>
          </NavSection>
          <NavSection>
            <NavHeading>Channels</NavHeading>
            <ul>
              <NavItem>
                <a>Art</a>
              </NavItem>
              <NavItem>
                <a>Music</a>
              </NavItem>
              <NavItem>
                <a>Games</a>
              </NavItem>
              <NavItem>
                <a>Photography</a>
              </NavItem>
              <NavItem>
                <a>Programming</a>
              </NavItem>
            </ul>
          </NavSection>
        </SideNav>
      </Sidebar>
    }
  >
    <NewsFeed />
  </MainLayout>
);

export default RevisedLandingScreen;
