// @flow
import React from 'react';
import styled from 'react-emotion';
import { FaAngleDown } from 'react-icons/fa';
import { Link, Route } from 'react-router-dom';
import { css } from 'emotion';
import FeedHeader from './components/FeedHeader/FeedHeader';
import PostHeader from './components/PostHeader/PostHeader';
import { BREAKPOINTS } from '../../../../styles/responsive';

export const headerHeight = 60;

const Header = styled('header')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${headerHeight}px;
  background-color: #ffffff;
  z-index: 100;
  box-shadow: 0 1px 5px 0 rgba(38, 49, 65, 0.04);
`;

const HeaderContent = styled('div')`
  max-width: 1248px;
  padding: 0 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;

  ${BREAKPOINTS.mobile} {
    padding: 0 10px;
  }
`;

const HeaderInfo = styled('section')`
  margin-left: 8px;

  ${BREAKPOINTS.mobile} {
    margin-left: 3px;
  }
`;

const siteIconClass = css`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eeeff3;

  ${BREAKPOINTS.mobile} {
    width: 34px;
    height: 34px;
  }
`;

type Props = {};

const SiteHeader = () => (
  <Header>
    <HeaderContent>
      <Link to="/" className={siteIconClass}></Link>
      <HeaderInfo>
        <Route exact path="/" component={FeedHeader} />
        <Route exact path="/post/:id" component={PostHeader} />
      </HeaderInfo>
    </HeaderContent>
  </Header>
);

export default SiteHeader;
