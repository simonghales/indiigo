// @flow
import React from 'react';
import styled from 'react-emotion';
import { FaAngleLeft } from 'react-icons/fa';
import { css } from 'emotion';
import SiteLogo from '../../../components/SiteLogo';
import ProfileBadge from '../../../components/ProfileBadge';
import ReturnButton from './ReturnButton';
import { CommentsButton, LikeButton } from '../../../components/RoundButton';
import PostInfo, { PostDetails } from '../../../components/PostInfo';
import PostComments from './PostComments';
import { BREAKPOINTS } from '../../../styles/responsive';
import { mobileSidePadding } from '../../../styles/layout';
import { smallBoldCss } from '../../../styles/typography';

const Container = styled('div')`
  position: relative;

  ${BREAKPOINTS.desktop} {
    min-height: 100vh;
  }

  ${BREAKPOINTS.mobile} {
    padding: 0 18px;
    margin: 17px 0 10px 0;
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
    ${smallBoldCss};
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
    ${smallBoldCss};
  }
`;

const commentsClass = css`
  ${BREAKPOINTS.mobile} {
    display: none;
  }
`;

const MobileOptionsWrapper = styled('div')`
  ${BREAKPOINTS.mobile} {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const MobileOptions = styled('div')`
  ${BREAKPOINTS.desktop} {
    display: none;
  }
  display: flex;
`;

const MobileOption = styled('div')`
  text-align: center;
  &:not(:last-child) {
    margin-right: 6px;
  }
`;

const OptionLabel = styled('div')`
  ${smallBoldCss};
  margin-top: 3px;
`;

const mobileOnlyClass = css`
  ${BREAKPOINTS.desktop} {
    display: none;
  }
`;

const postInfoClass = css`
  ${BREAKPOINTS.mobile} {
    margin-top: 6px;
  }
`;

export const PostPreview = ({ truncate = false, ...otherProps }) => (
  <div {...otherProps}>
    <MobileOptionsWrapper>
      <div>
        <ProfileBadge />
        <PostDetails className={mobileOnlyClass} />
      </div>
      <MobileOptions>
        <MobileOption>
          <LikeButton />
          <OptionLabel>874</OptionLabel>
        </MobileOption>
        <MobileOption>
          <CommentsButton />
          <OptionLabel>4</OptionLabel>
        </MobileOption>
      </MobileOptions>
    </MobileOptionsWrapper>
    <PostInfo className={postInfoClass} truncate={truncate} />
  </div>
);

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
        <PostPreview />
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
