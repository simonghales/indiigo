// @flow
import React from 'react';
import styled from 'react-emotion';
import { FaAngleLeft } from 'react-icons/fa';
import { css } from 'emotion';
import SiteLogo from '../../../components/SiteLogo';
import ProfileBadge from '../../../components/ProfileBadge';
import ReturnButton from './ReturnButton';
import { CommentsButton, LikeButton } from '../../../components/RoundButton';
import PostDetails from '../../../components/PostDetails';
import PostComments from './PostComments';
import { BREAKPOINTS } from '../../../styles/responsive';
import { mobileSidePadding } from '../../../styles/layout';

const Container = styled('div')`
  ${mobileSidePadding};
  position: relative;

  ${BREAKPOINTS.desktop} {
    min-height: 100vh;
  }

  ${BREAKPOINTS.mobile} {
    margin: 15px 0;
  }
`;

const Nav = styled('nav')`
  position: fixed;
  top: 30px;
  z-index: 100;

  ${BREAKPOINTS.mobile} {
    display: none;
  }

  &::before {
    content: '';
    position: absolute;
    left: -5px;
    top: -2px;
    right: -5px;
    bottom: -2px;
    background-color: rgba(248, 248, 246, 0.8);
    box-shadow: 0 0 10px rgba(248, 248, 246, 0.5);
    border-radius: 10px;
  }

  svg {
    display: block;

    &:not(:first-child) {
      margin-left: 3px;
    }
  }
`;

const NavContent = styled('div')`
  display: flex;
  align-items: center;
  position: relative;
`;

const Top = styled('section')`
  display: flex;
  justify-content: flex-end;

  ${BREAKPOINTS.desktop} {
    margin-top: 81px;
  }
`;

const TopContent = styled('div')`
  ${BREAKPOINTS.desktop} {
    width: calc((100% + 15px) * 0.666667);
    display: flex;
    flex-direction: column;
  }
`;

const LikesContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  align-self: flex-end;

  ${BREAKPOINTS.mobile} {
    display: none;
  }

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

  ${BREAKPOINTS.mobile} {
    display: none;
  }

  span {
    display: inline-block;
    margin-left: 8px;
    font-weight: 700;
    font-size: 11.5px;
    color: #a0abff;
    letter-spacing: 0.16px;
  }
`;

const commentsClass = css`
  ${BREAKPOINTS.mobile} {
    display: none;
  }
`;

const PostAside = () => (
  <Container>
    <Nav>
      <NavContent>
        <ReturnButton />
        <SiteLogo />
      </NavContent>
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
    <PostComments className={commentsClass} />
  </Container>
);

export default PostAside;
