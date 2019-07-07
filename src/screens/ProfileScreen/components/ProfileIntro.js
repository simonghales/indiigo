// @flow
import React from 'react';
import styled from 'react-emotion';
import { FaRegHeart, FaSwimmer } from 'react-icons/fa';
import { css } from 'emotion';
import { BREAKPOINTS } from '../../../styles/responsive';
import { gridLayoutCss, maxWidthLayoutCss } from '../../../styles/layout';
import { roundBackShadowCss } from '../../../styles/shared/fills';
import { largeHeadingCss, mediumHeadingCss } from '../../../styles/typography';
import { RectangleButton, RoundIconButton } from '../../../components/RoundButton';
import photo from '../../../chiaoandi.jpg';

const Wrapper = styled('section')`
  background-color: rgb(252, 252, 255, 0.5);
  box-shadow: 0 1px 5px rgba(26, 40, 75, 0.02), 0 1px 1px rgba(26, 40, 75, 0.02);
`;

const CoverImage = styled('div')`
  height: 25vw;
  background-color: #d0d0d0;
  background-image: url(${photo});
  background-size: cover;
  background-position: center 33%;
`;

const Container = styled('div')`
  ${BREAKPOINTS.desktop} {
    ${gridLayoutCss};
    ${maxWidthLayoutCss};
    padding-bottom: 30px;
  }
`;

const ImageWrapper = styled('div')`
  grid-column: 2 / span 2;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProfileImageWrapper = styled('div')`
  position: relative;
  margin-top: -76px;
  align-self: flex-end;
  &::before {
    ${roundBackShadowCss};
    content: '';
  }
`;

const ProfileImage = styled('div')`
  position: relative;
  width: 152px;
  height: 152px;
  background-color: white;
  background-image: url('https://pbs.twimg.com/profile_images/715135755228692480/6aPPjwtK_400x400.jpg');
  background-size: cover;
  border-radius: 50%;
  border: 5px solid #ffffff;
`;

const Info = styled('div')`
  padding-top: 20px;
  grid-column: span 6;
`;

const Options = styled('div')`
  align-self: flex-end;
  width: 152px;
  margin-top: 20px;
  padding: 0 5px;
`;

const Name = styled('h2')`
  ${largeHeadingCss};
`;

const Handle = styled('h3')`
  ${mediumHeadingCss};
  color: rgb(63, 70, 96);
  font-weight: 400;
`;

const Follow = styled('div')`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 15px;

  svg {
    margin-right: 5px;
    position: relative;
    top: 1px;
  }
`;

const ProfileIntro = () => (
  <Wrapper>
    <CoverImage />
    <Container>
      <ImageWrapper>
        <ProfileImageWrapper>
          <ProfileImage />
        </ProfileImageWrapper>
        <Options>
          <RectangleButton>
            <Follow>
              <FaSwimmer size={18} />
              <div>Follow</div>
            </Follow>
          </RectangleButton>
        </Options>
      </ImageWrapper>
      <Info>
        <Name>Simon Hales</Name>
        <Handle>@simonghales</Handle>
      </Info>
    </Container>
  </Wrapper>
);

export default ProfileIntro;
