// @flow
import React from 'react';
import styled from 'react-emotion';
import { smallTextCss } from '../../../../../../styles/typography';
import { BREAKPOINTS } from '../../../../../../styles/responsive';

const Container = styled('div')`
  margin-left: 39px;

  ${BREAKPOINTS.mobile} {
    margin-left: 2px;
  }
`;

const UserInfo = styled('div')`
  ${smallTextCss};

  a {
    display: inline-block;
    margin-right: 2px;
  }
`;

const Name = styled('a')`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 11px;
  color: #263141;
  letter-spacing: 0.37px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    //text-decoration-width: 3px;
    //text-decoration-thickness: 3px;
  }
`;

const Handler = styled('a')`
  cursor: pointer;
  color: #3c4d65;

  &:hover {
    text-decoration: underline;
  }
`;

const Intro = styled('div')`
  font-family: 'Open Sans';
  font-size: 11px;
  color: #263141;
  letter-spacing: 0.37px;
`;

type Props = {};

const PostHeader = () => (
  <Container>
    <UserInfo>
      <Name>Simon Hales</Name> <Handler>@simonghales</Handler> <span>4h</span>
    </UserInfo>
    <Intro>Check out my awesome new post! Pretty nifty aye?</Intro>
  </Container>
);

export default PostHeader;
