// @flow
import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { roundBackShadowCss } from '../styles/shared/fills';
import { BREAKPOINTS } from '../styles/responsive';
import { vibrantColor } from '../styles/colors';

const Container = styled('div')`
  display: flex;
  align-items: center;

  ${BREAKPOINTS.desktop} {
    margin-left: -3px;
  }

  ${BREAKPOINTS.mobile} {
    margin-left: -2px;
  }
`;

const ThumbnailWrapper = styled('div')`
  position: relative;
  margin-right: 6px;

  ${BREAKPOINTS.mobile} {
    margin-right: 5px;
  }

  &::before {
    ${roundBackShadowCss};
    content: '';
  }
`;

const Thumbnail = styled('div')`
  position: relative;
  background: #f2f1fb;
  border: 3px solid #ffffff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url('https://pbs.twimg.com/profile_images/715135755228692480/6aPPjwtK_400x400.jpg');
  background-size: cover;

  ${BREAKPOINTS.mobile} {
    width: 40px;
    height: 40px;
    border-width: 2px;
  }
`;

const Info = styled('div')``;

const Name = styled('div')`
  font-weight: 600;
  font-size: 14px;
  color: #0c2340;
  letter-spacing: 0.19px;

  ${BREAKPOINTS.mobile} {
    font-size: 12px;
  }

  a {
    &:hover {
      color: ${vibrantColor};
    }
  }
`;

const Handle = styled('div')`
  font-size: 13px;
  color: #3f4660;
  letter-spacing: 0.18px;

  ${BREAKPOINTS.mobile} {
    font-size: 12px;
  }

  a {
    &:hover {
      color: ${vibrantColor};
    }
  }
`;

const ProfileBadge = () => (
  <Container>
    <ThumbnailWrapper>
      <Link to="/profile">
        <Thumbnail />
      </Link>
    </ThumbnailWrapper>
    <Info>
      <Name>
        <Link to="/profile">Simon Hales</Link>
      </Name>
      <Handle>
        <Link to="/profile">@simonghales</Link>
      </Handle>
    </Info>
  </Container>
);

export default ProfileBadge;
