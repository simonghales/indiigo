// @flow
import React from 'react';
import styled from 'react-emotion';
import { FaAngleLeft } from 'react-icons/fa';
import SiteLogo from '../../../components/SiteLogo';
import ProfileBadge from '../../../components/ProfileBadge';
import ReturnButton from './ReturnButton';
import { LikeButton } from '../../../components/RoundButton';

const Container = styled('div')`
  padding-top: 30px;
`;

const Nav = styled('nav')`
  display: flex;
  align-items: center;

  svg {
    display: block;

    &:not(:first-child) {
      margin-left: 5px;
    }
  }
`;

const Top = styled('section')`
  display: flex;
  justify-content: flex-end;
`;

const TopContent = styled('div')`
  width: calc((100% + 15px) * 0.666667);
  display: flex;
  flex-direction: column;
`;

const LikesContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  align-self: flex-end;
  margin-top: 26px;

  span {
    display: inline-block;
    margin-right: 8px;
    font-weight: 700;
    font-size: 11.5px;
    color: #a0abff;
    letter-spacing: 0.16px;
  }
`;

const PostAside = () => (
  <Container>
    <Nav>
      <ReturnButton />
      <SiteLogo />
    </Nav>
    <Top>
      <TopContent>
        <LikesContainer>
          <span>874</span>
          <LikeButton />
        </LikesContainer>
        <ProfileBadge />
      </TopContent>
    </Top>
  </Container>
);

export default PostAside;
