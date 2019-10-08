// @flow
import React from 'react';
import styled from 'react-emotion';
import { FaAngleDown } from 'react-icons/fa';
import { DATA_POSTS } from '../../data/posts';
import CleanPost, {
  CleanImagePost,
  CleanTextImagePost,
  CleanTextPost,
} from './components/CleanPost/CleanPost';
import CleanPostLayout from '../../components/CleanPostLayout/CleanPostLayout';
import { BREAKPOINTS } from '../../styles/responsive';
import Post from '../../components/Post/Post';

const MainContent = styled('div')`
  max-width: 1248px;
  padding: 0 50px;
  margin: 0 auto;

  ${BREAKPOINTS.mobile} {
    padding: 0 14px;
  }
`;

const Posts = styled('section')`
  padding: 0 54px;
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;

  ${BREAKPOINTS.mobile} {
    padding: 0;
    margin-top: 0;
  }
`;

const Column = styled('div')`
  ${BREAKPOINTS.desktop} {
    width: 50%;

    &:first-child {
      padding-right: 20px;
    }

    &:last-child {
      padding-left: 20px;
    }
  }
`;

const PostWrapper = styled('div')`
  margin-top: 50px;

  ${BREAKPOINTS.mobile} {
    margin-top: 30px;
  }

  ${BREAKPOINTS.desktop} {
    &:first-child {
      margin-top: 0;
    }
  }
`;

type Props = {};

const CleanLandingScreen = () => {
  const firstList = DATA_POSTS;
  const secondList = DATA_POSTS.slice().reverse();
  return (
    <MainContent>
      <Posts>
        <Column>
          {firstList.map(post => (
            <PostWrapper key={post.uid}>
              <Post data={post} />
            </PostWrapper>
          ))}
        </Column>
        <Column>
          {secondList.map(post => (
            <PostWrapper key={post.uid}>
              <Post data={post} />
            </PostWrapper>
          ))}
        </Column>
      </Posts>
    </MainContent>
  );
};

export default CleanLandingScreen;
