// @flow
import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { placeholderCss } from '../../styles/shared/placeholder';

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

const placeholderNameClass = css`
  &::before {
    ${placeholderCss};
    content: 'loading.........';
  }
`;

const placeholderHandleClass = css`
  &::before {
    ${placeholderCss};
    content: 'loading...';
  }
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

export const PlaceholderProfileBadge = () => (
  <Info>
    <Thumbnail></Thumbnail>
    <div>
      <Name className={placeholderNameClass}></Name>
      <Handle className={placeholderHandleClass}></Handle>
    </div>
  </Info>
);

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
