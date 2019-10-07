// @flow
import React from 'react';
import styled from 'react-emotion';
import { FaComment, FaRegComment, FaRegComments, FaRegHeart } from 'react-icons/fa';
import avatar from '../../../../avatar.jpg';
import TextBody from './components/TextBody';
import TextImageBody from './components/TextImageBody';
import ImageBody from './components/ImageBody';
import { smallTextCss } from '../../../../styles/typography';
import { BREAKPOINTS } from '../../../../styles/responsive';

const Header = styled('header')`
  margin-bottom: 15px;

  ${BREAKPOINTS.mobile} {
    margin-bottom: 10px;
  }
`;

const UserIntro = styled('div')`
  display: flex;
  align-items: center;
`;

const Details = styled('div')`
  margin-left: 5px;
`;

const UserInfo = styled('div')`
  ${smallTextCss};

  a {
    display: inline-block;
    margin-right: 2px;
  }
`;

const Name = styled('a')`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 11px;
  color: #263141;
  letter-spacing: 0.37px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    //text-decoration-width: 3px;
    //text-decoration-thickness: 3px;
  }
`;

const Handler = styled('a')`
  cursor: pointer;
  color: #3c4d65;

  &:hover {
    text-decoration: underline;
  }
`;

const Intro = styled('div')`
  font-family: 'Open Sans';
  font-size: 11px;
  color: #263141;
  letter-spacing: 0.37px;
`;

const Thumbnail = styled('div')`
  background: #eeeff3;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-left: -6px;
  background-size: cover;
  background-position: center;
  background-image: url(${avatar});
  cursor: pointer;
`;

const PostBodyWrapper = styled('div')`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 28px;
    left: 20px;
    right: 20px;
    bottom: 0;
    box-shadow: 0 6px 24px 0 rgba(38, 49, 65, 0.05);
    border-radius: 4px;
  }
`;

const PostBody = styled('section')`
  position: relative;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(38, 49, 65, 0.05);
`;

const Footer = styled('footer')`
  margin-top: 9px;
`;

const Options = styled('div')`
  display: flex;
  align-items: center;
  font-size: 9px;
  color: #9094ac;
  letter-spacing: 0.3px;
  margin-left: 16px;

  ${BREAKPOINTS.mobile} {
    font-size: 12px;
    margin-left: 8px;
  }
`;

const Option = styled('div')`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;

    ${BREAKPOINTS.mobile} {
      margin-right: 12px;
    }
  }
`;

const OptionIcon = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2px;

  ${BREAKPOINTS.mobile} {
    margin-right: 4px;
  }

  svg {
    display: block;
  }
`;

type Props = {
  children: any,
};

const CleanPost = ({ children }: Props) => (
  <article>
    <Header>
      <UserIntro>
        <Thumbnail />
        <Details>
          <UserInfo>
            <Name>Simon Hales</Name> <Handler>@simonghales</Handler> <span>4h</span>
          </UserInfo>
          <Intro>Check out my awesome new post! Pretty nifty aye?</Intro>
        </Details>
      </UserIntro>
    </Header>
    <PostBodyWrapper>
      <PostBody>{children}</PostBody>
    </PostBodyWrapper>
    <Footer>
      <Options>
        <Option>
          <OptionIcon>
            <FaRegHeart />
          </OptionIcon>
          12
        </Option>
        <Option>
          <OptionIcon>
            <FaRegComment />
          </OptionIcon>
          4
        </Option>
      </Options>
    </Footer>
  </article>
);

export default CleanPost;

export const CleanTextPost = () => (
  <CleanPost>
    <TextBody />
  </CleanPost>
);

export const CleanTextImagePost = () => (
  <CleanPost>
    <TextImageBody />
  </CleanPost>
);

export const CleanImagePost = () => (
  <CleanPost>
    <ImageBody />
  </CleanPost>
);
