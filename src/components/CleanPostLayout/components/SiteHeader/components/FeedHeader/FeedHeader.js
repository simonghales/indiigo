// @flow
import React from 'react';
import styled from 'react-emotion';
import { FaAngleDown } from 'react-icons/fa';
import { BREAKPOINTS } from '../../../../../../styles/responsive';
import { RoundButton } from '../../../../../buttons';

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

export const HeaderButton = styled(RoundButton)`
  margin-right: 5px;

  ${BREAKPOINTS.mobile} {
    margin-right: 3px;
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
