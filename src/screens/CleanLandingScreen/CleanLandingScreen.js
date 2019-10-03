// @flow
import React from 'react';
import styled from 'react-emotion';
import { FaAngleDown } from 'react-icons/fa';
import CleanPost, {
  CleanImagePost,
  CleanTextImagePost,
  CleanTextPost,
} from './components/CleanPost/CleanPost';

const Wrapper = styled('div')`
  color: #242435;
  min-height: 100vh;
  background-color: #fcfcfd;
  font-family: 'Roboto';
  overflow: hidden;
`;

const Header = styled('header')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #ffffff;
  z-index: 100;
  box-shadow: 0 1px 5px 0 rgba(38, 49, 65, 0.04);
`;

const HeaderContent = styled('div')`
  max-width: 1248px;
  padding: 0 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
`;

const SiteIcon = styled('div')`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eeeff3;
`;

const HeaderInfo = styled('section')`
  margin-left: 8px;
  display: flex;
  align-items: center;

  h2 {
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.47px;
  }
`;

const HeaderButton = styled('div')`
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  cursor: pointer;
  border: 2px solid #ffffff;
  border-radius: 50%;
  transition: border 250ms ease, background 250ms ease;

  &:hover {
    border-color: #eeeff3;
  }

  &:active {
    background-color: #eeeff3;
    border-color: #eeeff3;
  }

  svg {
    display: block;
    position: relative;
    top: 1px;
  }
`;

const Main = styled('main')`
  padding-top: 70px;
  margin-bottom: 200px;
`;

const MainContent = styled('div')`
  max-width: 1248px;
  padding: 0 50px;
  margin: 0 auto;
`;

const Posts = styled('section')`
  padding: 0 54px;
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
`;

const Column = styled('div')`
  width: 50%;

  &:first-child {
    padding-right: 20px;
  }

  &:last-child {
    padding-left: 20px;
  }
`;

const PostWrapper = styled('div')`
  margin-top: 50px;
  &:first-child {
    margin-top: 0;
  }
`;

type Props = {};

const CleanLandingScreen = () => (
  <Wrapper>
    <section>
      <Header>
        <HeaderContent>
          <SiteIcon />
          <HeaderInfo>
            <HeaderButton>
              <FaAngleDown />
            </HeaderButton>
            <h2>Popular Posts</h2>
          </HeaderInfo>
        </HeaderContent>
      </Header>
      <Main>
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
      </Main>
    </section>
  </Wrapper>
);

export default CleanLandingScreen;
