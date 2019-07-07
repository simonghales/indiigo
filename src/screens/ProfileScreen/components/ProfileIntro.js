// @flow
import React from 'react';
import styled from 'react-emotion';
import { FaRegHeart, FaSwimmer } from 'react-icons/fa';
import { css } from 'emotion';
import { BREAKPOINTS } from '../../../styles/responsive';
import { gridLayoutCss, maxWidthLayoutCss, mobileSidePadding } from '../../../styles/layout';
import { roundBackShadowCss } from '../../../styles/shared/fills';
import { largeHeadingCss, mediumHeadingCss } from '../../../styles/typography';
import { RectangleButton, RoundIconButton } from '../../../components/RoundButton';
import photo from '../../../chiaoandi.jpg';
import { vibrantColor } from '../../../styles/colors';

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

  ${BREAKPOINTS.mobile} {
    height: 50vw;
  }
`;

const Container = styled('div')`
  ${mobileSidePadding};
  ${BREAKPOINTS.mobile} {
    display: flex;
    padding-bottom: 18px;
  }
  ${BREAKPOINTS.desktop} {
    ${gridLayoutCss};
    ${maxWidthLayoutCss};
    padding-bottom: 30px;
  }
`;

const ImageWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  ${BREAKPOINTS.desktop} {
    grid-column: 2 / span 2;
    align-items: center;
  }

  ${BREAKPOINTS.mobile} {
    align-items: flex-start;
  }
`;

const ProfileImageWrapper = styled('div')`
  position: relative;
  margin-top: -76px;
  &::before {
    ${roundBackShadowCss};
    content: '';
  }

  ${BREAKPOINTS.desktop} {
    align-self: flex-end;
  }

  ${BREAKPOINTS.mobile} {
    margin-top: -60px;
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

  ${BREAKPOINTS.mobile} {
    width: 120px;
    height: 120px;
    border-width: 4px;
  }
`;

const Info = styled('div')`
  padding-top: 20px;
  grid-column: span 6;

  ${BREAKPOINTS.mobile} {
    padding-left: 15px;
    padding-top: 10px;
  }
`;

const Options = styled('div')`
  width: 152px;
  margin-top: 20px;
  padding: 0 5px;

  ${BREAKPOINTS.mobile} {
    width: 120px;
    padding: 0 4px;
    margin-top: 10px;
  }

  ${BREAKPOINTS.desktop} {
    align-self: flex-end;
  }
`;

const Name = styled('h2')`
  ${largeHeadingCss};
`;

const Handle = styled('h3')`
  ${mediumHeadingCss};
  color: rgb(63, 70, 96);
  font-weight: 400;
  margin-top: -2px;
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

const Description = styled('div')`
  margin-top: 17px;

  ${BREAKPOINTS.mobile} {
    margin-top: 15px;
  }

  a {
    color: ${vibrantColor};
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
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
        <Description>
          <p>
            creator of <a>@indiigo</a>
          </p>
        </Description>
      </Info>
    </Container>
  </Wrapper>
);

export default ProfileIntro;
