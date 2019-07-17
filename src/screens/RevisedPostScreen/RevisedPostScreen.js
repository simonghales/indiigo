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

const Container = styled('div')`
  display: flex;
  position: relative;
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
`;

const CommentsContainer = styled('div')`
  min-width: 310px;
  flex: 1;
`;

const CommentsInner = styled('div')`
  //position: sticky;
  //top: 0;
  padding: 0 30px;
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
