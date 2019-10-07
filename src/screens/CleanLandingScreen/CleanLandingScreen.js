// @flow
import React from 'react';
import styled from 'react-emotion';
import { FaAngleDown } from 'react-icons/fa';
import CleanPost, {
  CleanImagePost,
  CleanTextImagePost,
  CleanTextPost,
} from './components/CleanPost/CleanPost';
import CleanPostLayout from '../../components/CleanPostLayout/CleanPostLayout';
import { BREAKPOINTS } from '../../styles/responsive';

const MainContent = styled('div')`
  max-width: 1248px;
  padding: 0 50px;
  margin: 0 auto;

  ${BREAKPOINTS.mobile} {
    padding: 0 15px;
  }
`;

const Posts = styled('section')`
  padding: 0 54px;
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;

  ${BREAKPOINTS.mobile} {
    padding: 0;
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

  &:first-child {
    margin-top: 0;
  }
`;

type Props = {};

const CleanLandingScreen = () => (
  <MainContent>
    <Posts>
      <Column>
        <PostWrapper>
          <CleanTextPost />
        </PostWrapper>
        <PostWrapper>
          <CleanImagePost />
        </PostWrapper>
        <PostWrapper>
          <CleanTextPost />
        </PostWrapper>
        <PostWrapper>
          <CleanTextPost />
        </PostWrapper>
        <PostWrapper>
          <CleanTextImagePost />
        </PostWrapper>
        <PostWrapper>
          <CleanTextPost />
        </PostWrapper>
      </Column>
      <Column>
        <PostWrapper>
          <CleanTextImagePost />
        </PostWrapper>
        <PostWrapper>
          <CleanTextPost />
        </PostWrapper>
        <PostWrapper>
          <CleanImagePost />
        </PostWrapper>
        <PostWrapper>
          <CleanTextPost />
        </PostWrapper>
        <PostWrapper>
          <CleanTextImagePost />
        </PostWrapper>
        <PostWrapper>
          <CleanTextPost />
        </PostWrapper>
      </Column>
    </Posts>
  </MainContent>
);

export default CleanLandingScreen;
