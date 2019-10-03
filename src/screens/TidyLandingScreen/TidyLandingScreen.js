// @flow
import React from 'react';
import styled from 'react-emotion';
import Sidebar from '../../components/tidy/Sidebar/Sidebar';
import MainHeader from '../../components/tidy/MainHeader/MainHeader';
import PostCard from '../../components/tidy/PostCard/PostCard';

const Container = styled('div')`
  display: flex;
  min-height: 100vh;
  background-color: #ffffff;
  font-family: 'Open Sans';
`;

const Side = styled('div')`
  width: 240px;
`;

const Main = styled('div')`
  flex: 1;
`;

const MainContent = styled('div')`
  padding-left: 70px;
`;

const Heading = styled('h2')`
  font-weight: 600;
  font-size: 18px;
  color: #263141;
  margin-top: 52px;
  margin-bottom: 37px;
`;

const List = styled('ul')``;

const ListItem = styled('li')`
    
`;

type Props = {};

const TidyLandingScreen = () => (
  <Container>
    <Side>
      <Sidebar />
    </Side>
    <Main>
      <MainHeader />
      <MainContent>
        <Heading>Popular</Heading>
        <ul>
          <li>
            <PostCard />
          </li>
        </ul>
      </MainContent>
    </Main>
  </Container>
);

export default TidyLandingScreen;
