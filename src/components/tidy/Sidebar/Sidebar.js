// @flow
import React from 'react';
import styled from 'react-emotion';
import UilBars from '@iconscout/react-unicons/icons/uil-bars';
import { css } from 'emotion';

const Container = styled('div')`
  background-color: #f9faff;
  height: 100vh;
  border-right: 1px solid #e9ecf5;
`;

const Header = styled('header')`
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-right: 10px;
`;

const Title = styled('div')`
  font-weight: 900;
  font-size: 15px;
  color: #4a4965;
  letter-spacing: 0.5px;
  flex: 1;
`;

const NavButton = styled('div')`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4a4965;
`;

const NavSection = styled('section')`
  margin-top: 42px;
`;

const NavHeader = styled('header')`
  font-weight: 600;
  font-size: 12px;
  color: #9094ac;
  letter-spacing: 0.4px;
  padding: 0 30px;
  text-transform: uppercase;
  padding-bottom: 4px;
  position: relative;
  margin-bottom: 11px;

  &::after {
    content: '';
    position: absolute;
    left: 30px;
    bottom: 0;
    right: 30px;
    border-bottom: 1px solid #e9ecf5;
  }
`;

const NavLink = styled('div')`
  font-weight: 700;
  font-size: 12px;
  color: #9094ac;
  letter-spacing: 0.4px;
  padding: 12px 30px;
  cursor: pointer;
  transition: background 350ms ease;

  &:hover {
    background: #eceff9;
    transition: background 250ms ease;
  }
`;

const activeClass = css`
  background: #eceff9;
  color: #263141;
`;

type Props = {};

const Sidebar = () => (
  <Container>
    <Header>
      <Title>indiigo</Title>
      <NavButton>
        <UilBars size="20" />
      </NavButton>
    </Header>
    <div>
      <NavSection>
        <NavHeader>Feeds</NavHeader>
        <div>
          <NavLink className={activeClass}>Popular</NavLink>
          <NavLink>Custom</NavLink>
        </div>
      </NavSection>
      <NavSection>
        <NavHeader>Channels</NavHeader>
        <div>
          <NavLink>Art</NavLink>
          <NavLink>Music</NavLink>
          <NavLink>Games</NavLink>
          <NavLink>Photography</NavLink>
          <NavLink>Programming</NavLink>
        </div>
      </NavSection>
    </div>
  </Container>
);

export default Sidebar;
