// @flow
import React from 'react';
import UilHeart from '@iconscout/react-unicons/icons/uil-heart';
import UilComment from '@iconscout/react-unicons/icons/uil-comment';
import UilScenery from '@iconscout/react-unicons/icons/uil-scenery';
import UilVideo from '@iconscout/react-unicons/icons/uil-video';
import UilMusic from '@iconscout/react-unicons/icons/uil-music';
import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down';
import styled from 'react-emotion';
import { css } from 'emotion';
import { Link } from '@reach/router';
import ProfileBadge from '../../../components/revised/ProfileBadge';

const Article = styled('article')`
  display: flex;
`;

const Aside = styled('aside')`
  width: 190px;
  padding-right: 10px;
  position: relative;
  //padding-bottom: 20px;
  padding-top: 23px;
`;

const AsideContent = styled('div')`
  //position: sticky;
  //top: 25px;
`;

const Description = styled('p')`
  margin-top: 8px;
  font-size: 12px;
  color: #74779c;
`;

const Options = styled('div')`
  margin-top: 8px;
  display: flex;
  margin-left: -5px;
`;

const Option = styled('div')`
  &:not(:last-child) {
    margin-right: 10px;
  }
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  color: #a0abff;
  cursor: pointer;
`;

const RightOption = styled('div')`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const OptionIcon = styled('div')`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OptionLabel = styled('div')`
  margin-left: 2px;
`;

const CardWrapper = styled('div')`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 0;
    box-shadow: 0 2px 20px 0 rgba(240, 238, 250, 0.5);
    border-radius: 8px;
  }
`;

const Card = styled('div')`
  position: relative;
  width: 600px;
  background-color: #ffffff;
  border: 1px solid #f0eefa;
  border-radius: 8px;
  padding: 20px 22px 28px 22px;
`;

const CardTitle = styled('h3')`
  font-weight: 600;
  font-size: 13px;
  color: #535262;
  margin: 5px 0 12px 0;
  padding-left: 10px;
`;

const CardPreview = styled('div')`
  background: #f4f5fc;
  height: 296px;
  border-radius: 3px;
  background-image: url('https://pbs.twimg.com/tweet_video_thumb/DmDqCNqUwAAo764?format=jpg&name=900x900');
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.075);
`;

const CardIcons = styled('div')`
  position: absolute;
  left: 20px;
  bottom: 6px;
  color: rgb(221, 222, 230);
  display: flex;
  align-items: center;

  svg {
    display: block;
  }
`;

const Icon = styled('div')`
  margin-right: 3px;
`;

const ProfileWrapper = styled('div')`
  margin-left: -7px;
`;

const PostCard = () => (
  <Article>
    <Aside>
      <AsideContent>
        <ProfileWrapper>
          <ProfileBadge />
        </ProfileWrapper>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue commodo tortor, non
          laoreet metus fringilla vel.
        </Description>
        <div>
          <Options>
            <Option>
              <OptionIcon>
                <UilHeart size="18" />
              </OptionIcon>
              <OptionLabel>12</OptionLabel>
            </Option>
            <Option>
              <OptionIcon>
                <UilComment size="16" />
              </OptionIcon>
              <OptionLabel>7</OptionLabel>
            </Option>
            <RightOption>
              <Option>
                <OptionIcon>
                  <UilAngleDown size="19" />
                </OptionIcon>
              </Option>
            </RightOption>
          </Options>
        </div>
      </AsideContent>
    </Aside>
    <CardWrapper>
      <Card>
        <CardTitle>
          <Link to="/revised/post">indiigo announcement</Link>
        </CardTitle>
        <CardPreview />
        <CardIcons>
          <Icon>
            <UilScenery size="14" />
          </Icon>
          <Icon>
            <UilVideo size="17" />
          </Icon>
          <Icon>
            <UilMusic size="14" />
          </Icon>
        </CardIcons>
      </Card>
    </CardWrapper>
  </Article>
);

export default PostCard;
