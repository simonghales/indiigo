// @flow
import React from 'react';
import UilArrowLeft from '@iconscout/react-unicons/icons/uil-arrow-left';
import styled from 'react-emotion';
import { navigate } from '@reach/router';
import MainLayout from '../../components/MainLayout';
import Sidebar, { MenuButton } from '../../components/Sidebar';
import PostSidebar from './components/PostSidebar';
import Post from '../../components/revised/Post';
import PostComments from './components/PostComments';
import { BREAKPOINTS } from '../../styles/responsive';

const Container = styled('div')`
  position: relative;

  ${BREAKPOINTS.desktop} {
    display: flex;
  }
`;

const PostContainer = styled('div')`
  width: 100%;
  max-width: 900px;
  min-height: 100vh;
  border-right: 1px solid #f6f4f7;
`;

const PostInner = styled('div')`
  position: sticky;
  top: 0;
  padding: 0 60px;

  ${BREAKPOINTS.mobile} {
    padding: 0 24px;
  }
`;

const CommentsContainer = styled('div')`
  ${BREAKPOINTS.desktop} {
    min-width: 310px;
    flex: 1;
  }
  ${BREAKPOINTS.mobile} {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const CommentsInner = styled('div')`
  //position: sticky;
  //top: 0;
  padding: 0 30px;

  ${BREAKPOINTS.mobile} {
    padding: 0 10px;
  }
`;

const RevisedPostScreen = () => (
  <MainLayout
    aside={
      <Sidebar
        nav={
          <MenuButton
            onClick={() => {
              navigate('/revised');
            }}
          >
            <UilArrowLeft size="28" />
          </MenuButton>
        }
      >
        <PostSidebar />
      </Sidebar>
    }
  >
    <Container>
      <PostContainer>
        <PostInner>
          <Post />
        </PostInner>
      </PostContainer>
      <CommentsContainer>
        <CommentsInner>
          <PostComments />
        </CommentsInner>
      </CommentsContainer>
    </Container>
  </MainLayout>
);

export default RevisedPostScreen;
