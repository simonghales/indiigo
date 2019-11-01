// @flow
import React from 'react';
import styled from 'react-emotion';
import { FaAngleDown } from 'react-icons/fa';
import { Link, Route } from 'react-router-dom';
import { css } from 'emotion';
import { radialGradient } from 'polished';
import FeedHeader from './components/FeedHeader/FeedHeader';
import PostHeader from './components/PostHeader/PostHeader';
import { BREAKPOINTS } from '../../../../styles/responsive';
import UserMenu from './components/UserMenu/UserMenu';

export const headerHeight = 60;
export const mobileHeaderHeight = 50;

const Header = styled('header')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${headerHeight}px;
  background-color: #ffffff;
  z-index: 100;
  box-shadow: 0 1px 5px 0 rgba(38, 49, 65, 0.04);

  ${BREAKPOINTS.mobile} {
    height: ${mobileHeaderHeight}px;
  }
`;

const HeaderContent = styled('div')`
  max-width: 1248px;
  padding: 0 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  ${BREAKPOINTS.mobile} {
    padding: 0 7px;
  }
`;

const HeaderLeft = styled('div')`
  display: flex;
  align-items: center;
`;

const HeaderInfo = styled('section')`
  margin-left: 8px;

  ${BREAKPOINTS.mobile} {
    margin-left: 3px;
  }
`;

const siteIconClass = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  background-color: #eeeff3;
  background: radial-gradient(rgb(255, 255, 255), rgb(241, 242, 249));
  color: rgb(132, 142, 196);

  ${BREAKPOINTS.mobile} {
    width: 34px;
    height: 34px;
  }
`;

type Props = {};

const SiteHeader = () => (
  <Header>
    <HeaderContent>
      <HeaderLeft>
        <Link to="/" className={siteIconClass}>
          iG
        </Link>
        <HeaderInfo>
          <Route exact path="/" component={FeedHeader} />
          <Route exact path="/post/:id" component={PostHeader} />
        </HeaderInfo>
      </HeaderLeft>
      <div>
        <UserMenu />
      </div>
    </HeaderContent>
  </Header>
);

export default SiteHeader;
