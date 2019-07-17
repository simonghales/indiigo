// @flow
import React from 'react';
import styled from 'react-emotion';

const Info = styled('div')`
  display: flex;
  align-items: center;
`;

const Thumbnail = styled('div')`
  background: #f4f5fc;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 6px;
`;

const Name = styled('div')`
  font-weight: 600;
  font-size: 13px;
  color: #535262;
`;

const Handle = styled('div')`
  font-weight: 600;
  font-size: 12px;
  color: #74779c;
  margin-top: -1px;
`;

type Props = {};

const ProfileBadge = () => (
  <Info>
    <Thumbnail></Thumbnail>
    <div>
      <Name>Simon Hales</Name>
      <Handle>@simonghales</Handle>
    </div>
  </Info>
);

export default ProfileBadge;
