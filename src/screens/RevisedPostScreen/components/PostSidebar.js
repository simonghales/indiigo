// @flow
import React from 'react';
import styled from 'react-emotion';
import UilHeart from '@iconscout/react-unicons/icons/uil-heart';
import UilComment from '@iconscout/react-unicons/icons/uil-comment';
import ProfileBadge from '../../../components/revised/ProfileBadge';
import RoundButton from '../../../components/revised/RoundButton';

const Container = styled('div')`
  margin-top: 23px;
`;

const Profile = styled('div')`
  padding: 0 23px;
`;

const Options = styled('div')`
  padding: 0 23px;
  margin-top: 30px;
`;

const Option = styled('div')`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #a4a7c6;
  margin-top: 6px;
`;

const OptionIcon = styled(RoundButton)`
  margin-right: 6px;
`;

const Description = styled('section')`
  padding: 0 30px;
  font-size: 12px;
  color: #74779c;
  margin-top: 8px;
`;

const PostSidebar = () => (
  <Container>
    <Profile>
      <ProfileBadge />
    </Profile>
    <Description>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue commodo tortor, non
        laoreet metus fringilla vel.
      </p>
    </Description>
    <Options>
      <Option>
        <OptionIcon>
          <UilHeart size="26" />
        </OptionIcon>
        <div>12</div>
      </Option>
      <Option>
        <OptionIcon>
          <UilComment size="24" />
        </OptionIcon>
        <div>7</div>
      </Option>
    </Options>
  </Container>
);

export default PostSidebar;
