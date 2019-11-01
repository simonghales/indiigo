// @flow
import React from 'react';
import styled from 'react-emotion';
import { FaFilm, FaImage, FaPen } from 'react-icons/fa';
import { MainContent } from '../CleanPostScreen/CleanPostScreen';
import { BREAKPOINTS } from '../../styles/responsive';
import { buttonResetCss } from '../../styles/buttons';

const Container = styled(MainContent)`
  margin-top: 40px;
  font-family: 'Open Sans';
`;

const Section = styled('section')`
  max-width: ${700 + 87 * 2}px;

  ${BREAKPOINTS.desktop} {
    padding: 0 87px;
  }

  ${BREAKPOINTS.mobile} {
    padding: 0 7px;
  }
`;

const Title = styled('h2')`
  font-size: 20px;
`;

const ContentOptions = styled('section')`
  margin-top: 20px;
`;

const ContentOption = styled('button')`
  ${buttonResetCss};
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin-top: 10px;
  background-color: #eeeff3;
  padding: 15px 16px 15px 15px;
  border-radius: 5px;
  max-width: 200px;

  svg {
    display: block;
    margin-right: 10px;
  }
`;

type Props = {};

const CleanPublishScreen = () => (
  <Container>
    <Section>
      <Title>What type of content would you like to post?</Title>
      <ContentOptions>
        <ContentOption>
          <FaImage />
          <div>Upload image(s)</div>
        </ContentOption>
        <ContentOption>
          <FaFilm />
          <div>Upload a video</div>
        </ContentOption>
        <ContentOption>
          <FaPen />
          <div>Write a post</div>
        </ContentOption>
      </ContentOptions>
    </Section>
  </Container>
);

export default CleanPublishScreen;
