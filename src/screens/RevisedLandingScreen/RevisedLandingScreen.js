// @flow
import React from 'react';
import styled from 'react-emotion';
import UilBars from '@iconscout/react-unicons/icons/uil-bars';
import { css } from 'emotion';
import NewsFeed from './components/NewsFeed';

const Container = styled('div')`
  display: flex;
`;

const AsideWrapper = styled('div')`
  min-height: 100vh;
  width: 230px;
  background-color: #ffffff;
  position: relative;
  border-right: 1px solid #f6f4f7;
`;

const Aside = styled('aside')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
`;

const MainContent = styled('section')`
  flex: 1;
  min-height: 100vh;
  background-color: #ffffff;
  padding-bottom: 100px;
`;

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

const MenuButton = styled('div')`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  color: #a4a7c6;
  margin-top: 15px;
  margin-left: 18px;
`;

const RevisedLandingScreen = () => (
  <Container>
    <AsideWrapper>
      <Aside>
        <MenuButton>
          <UilBars size="28" />
        </MenuButton>
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
      </Aside>
    </AsideWrapper>
    <MainContent>
      <NewsFeed />
    </MainContent>
  </Container>
);

export default RevisedLandingScreen;
