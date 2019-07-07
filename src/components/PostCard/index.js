// @flow
import React from 'react';
import styled from 'react-emotion';
import TextTruncate from 'react-text-truncate';
import { FaRegComments, FaRegHeart } from 'react-icons/fa';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import CardIcons from './components/CardIcons';
import ProfileBadge from '../ProfileBadge';
import QuotedComments from './components/QuotedComments';
import { detailsTextCss, mediumHeadingCss } from '../../styles/typography';
import { CommentsButton, LikeButton } from '../RoundButton';
import { vibrantColor } from '../../styles/colors';
import PostInfo from '../PostInfo';
import { BREAKPOINTS } from '../../styles/responsive';
import { PostPreview } from '../../screens/PostScreen/components/PostAside';

const Container = styled('article')`
  ${BREAKPOINTS.desktop} {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 30px;
  }

  ${BREAKPOINTS.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const MainCard = styled('section')`
  grid-column: span 6;
  position: relative;

  ${BREAKPOINTS.mobile} {
    order: 1;
  }

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    right: 20px;
    top: 20px;
    bottom: 0;
    box-shadow: 0 2px 24px 0 rgba(26, 40, 75, 0.11);
    border-radius: 10px;
  }
`;

const Content = styled('div')`
  position: relative;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(25, 36, 133, 0.04);

  ${BREAKPOINTS.mobile} {
    padding: 10px;
  }
`;

const CardHeader = styled('header')`
  padding: 5px 10px 15px 10px;
  display: flex;
  align-items: flex-end;
`;

const CardPostTitle = styled('h3')`
  ${mediumHeadingCss};
  margin-right: 13px;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 350ms ease;

    &:hover {
      color: ${vibrantColor};
      transition: color 200ms ease;
    }
  }
`;

const Preview = styled('div')`
  background: #f2f1fb;
  border-radius: 5px;
  min-height: 340px;
  background-image: url('https://pbs.twimg.com/tweet_video_thumb/DmDqCNqUwAAo764?format=jpg&name=900x900');
  background-size: cover;
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.075);

  ${BREAKPOINTS.mobile} {
    height: 50vw;
    min-height: unset;
  }
`;

const Aside = styled('aside')`
  min-width: 0;
  grid-column: span 2;

  ${BREAKPOINTS.mobile} {
    order: 2;
    padding: 0 10px;
  }
`;

const ProfileWrapper = styled('div')`
  margin-top: 22px;
  ${BREAKPOINTS.mobile} {
    display: none;
  }
`;

const Options = styled('section')`
  display: flex;
`;

const Option = styled('div')`
  &:not(:last-child) {
    margin-right: 6px;
  }
`;

const commentsClass = css`
  ${BREAKPOINTS.mobile} {
    display: none;
  }
`;

const desktopOptionsClass = css`
  margin-left: -3px;
  margin-top: 15px;

  ${BREAKPOINTS.mobile} {
    display: none;
  }
`;

const mobileOptionsClass = css`
  margin-right: -2px;
  ${BREAKPOINTS.desktop} {
    display: none;
  }
`;

const ProfileBadgeWrapper = styled('div')`
  ${BREAKPOINTS.mobile} {
    display: flex;
    justify-content: space-between;
  }
`;

const PostOptions = ({ ...otherProps }) => (
  <Options {...otherProps}>
    <Option>
      <LikeButton />
    </Option>
    <Option>
      <CommentsButton />
    </Option>
  </Options>
);

const mobilePostPreview = css`
  margin-top: 10px;
  ${BREAKPOINTS.desktop} {
    display: none;
  }
`;

const PostCard = () => (
  <Container>
    <Aside>
      <ProfileWrapper>
        <ProfileBadgeWrapper>
          <ProfileBadge />
          <PostOptions className={mobileOptionsClass} />
        </ProfileBadgeWrapper>
        <PostInfo truncate />
        <QuotedComments className={commentsClass} />
        <PostOptions className={desktopOptionsClass} />
      </ProfileWrapper>
      <PostPreview className={mobilePostPreview} truncate />
    </Aside>
    <MainCard>
      <Content>
        <CardHeader>
          <CardPostTitle>
            <Link to="/post">Post title goes here...</Link>
          </CardPostTitle>
          <CardIcons />
        </CardHeader>
        <Preview />
      </Content>
    </MainCard>
  </Container>
);

export default PostCard;
