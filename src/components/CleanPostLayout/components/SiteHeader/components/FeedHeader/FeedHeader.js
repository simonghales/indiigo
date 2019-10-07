// @flow
import React from 'react';
import styled from 'react-emotion';
import { FaAngleDown } from 'react-icons/fa';
import { BREAKPOINTS } from '../../../../../../styles/responsive';

const HeaderInfo = styled('section')`
  display: flex;
  align-items: center;

  h2 {
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.47px;
  }
`;

const HeaderButton = styled('div')`
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  cursor: pointer;
  border: 2px solid #ffffff;
  border-radius: 50%;
  transition: border 250ms ease, background 250ms ease;

  ${BREAKPOINTS.mobile} {
    margin-right: 3px;
  }

  &:hover {
    border-color: #eeeff3;
  }

  &:active {
    background-color: #eeeff3;
    border-color: #eeeff3;
  }

  svg {
    display: block;
    position: relative;
    top: 1px;
  }
`;

type Props = {};

const FeedHeader = () => (
  <HeaderInfo>
    <HeaderButton>
      <FaAngleDown />
    </HeaderButton>
    <h2>Popular Posts</h2>
  </HeaderInfo>
);

export default FeedHeader;
