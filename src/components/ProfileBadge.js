// @flow
import React from 'react';
import styled from 'react-emotion';
import { roundBackShadowCss } from '../styles/shared/fills';

const Container = styled('div')`
  display: flex;
  align-items: center;
  margin-left: -3px;
`;

const ThumbnailWrapper = styled('div')`
  position: relative;
  margin-right: 10px;

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
`;

const Name = styled('div')`
  font-weight: 600;
  font-size: 14px;
  color: #0c2340;
  letter-spacing: 0.19px;
`;

const Handle = styled('div')`
  font-size: 13px;
  color: #3f4660;
  letter-spacing: 0.18px;
`;

const ProfileBadge = () => (
  <Container>
    <ThumbnailWrapper>
      <Thumbnail />
    </ThumbnailWrapper>
    <div>
      <Name>Simon Hales</Name>
      <Handle>@simonghales</Handle>
    </div>
  </Container>
);

export default ProfileBadge;
