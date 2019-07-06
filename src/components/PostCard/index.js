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
import { detailsTextCss } from '../../styles/typography';
import RoundButton, { CommentsButton, LikeButton, RoundIconButton } from '../RoundButton';
import { vibrantColor } from '../../styles/colors';

const Container = styled('article')`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 30px;
`;

const MainCard = styled('section')`
  grid-column: span 6;
  position: relative;

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
`;

const CardHeader = styled('header')`
  padding: 5px 10px 15px 10px;
  display: flex;
  align-items: flex-end;
`;

const CardPostTitle = styled('h3')`
  font-weight: 600;
  font-size: 16px;
  color: #0c2340;
  letter-spacing: 0.22px;
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
`;

const Aside = styled('aside')`
  min-width: 0;
  grid-column: span 2;
`;

const ProfileWrapper = styled('div')`
  margin-top: 22px;
`;

const Info = styled('section')`
  margin: 11px 0 20px 0;

  p {
  }
`;

const Options = styled('section')`
  margin-left: -3px;
  margin-top: 15px;
  display: flex;
`;

const Option = styled('div')`
  &:not(:last-child) {
    margin-right: 6px;
  }
`;

const Details = styled('div')`
  ${detailsTextCss};
  margin-top: 4px;

  span {
    &:not(:last-child) {
      &::after {
        content: '‧';
        display: inline-block;
        margin: 0 7px;
      }
    }
  }
`;

const PostCard = () => (
  <Container>
    <Aside>
      <ProfileWrapper>
        <ProfileBadge />
        <Info>
          <p>
            <TextTruncate
              line={2}
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam."
              truncateText="…"
            />
          </p>
          <Details>
            <span>posted today</span>
            <span>options</span>
          </Details>
        </Info>
        <QuotedComments />
        <Options>
          <Option>
            <LikeButton />
          </Option>
          <Option>
            <CommentsButton />
          </Option>
        </Options>
      </ProfileWrapper>
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
