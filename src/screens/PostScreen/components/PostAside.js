// @flow
import React from 'react';
import styled from 'react-emotion';
import { FaAngleLeft } from 'react-icons/fa';
import SiteLogo from '../../../components/SiteLogo';
import ProfileBadge from '../../../components/ProfileBadge';
import ReturnButton from './ReturnButton';
import { CommentsButton, LikeButton } from '../../../components/RoundButton';
import PostDetails from '../../../components/PostDetails';
import PostComments from './PostComments';

const Container = styled('div')`
  position: relative;
  min-height: 100vh;
`;

const Nav = styled('nav')`
  padding-top: 30px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;

  svg {
    display: block;

    &:not(:first-child) {
      margin-left: 3px;
    }
  }
`;

const Top = styled('section')`
  display: flex;
  justify-content: flex-end;
  margin-top: 81px;
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

  span {
    display: inline-block;
    margin-right: 8px;
    font-weight: 700;
    font-size: 11.5px;
    color: #a0abff;
    letter-spacing: 0.16px;
  }
`;

const CommentsContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-left: -3px;

  span {
    display: inline-block;
    margin-left: 8px;
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
        <PostDetails />
        <CommentsContainer>
          <CommentsButton />
          <span>4 comments</span>
        </CommentsContainer>
      </TopContent>
    </Top>
    <PostComments />
  </Container>
);

export default PostAside;
