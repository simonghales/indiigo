// @flow
import React from 'react';
import styled from 'react-emotion';
import UilBars from '@iconscout/react-unicons/icons/uil-bars';
import RoundButton from './revised/RoundButton';

const MenuNav = styled('div')`
  margin-top: 18px;
  padding: 0 15px 0 23px;
  display: flex;
  justify-content: space-between;
`;

export const MenuButton = styled(RoundButton)`
  color: #a4a7c6;
`;

type Props = {
  nav: any,
  children: any,
};

const Sidebar = ({ children, nav }: Props) => (
  <div>
    <MenuNav>
      <MenuButton>
        <UilBars size="26" />
      </MenuButton>
      {nav}
    </MenuNav>
    <div>{children}</div>
  </div>
);

export default Sidebar;
