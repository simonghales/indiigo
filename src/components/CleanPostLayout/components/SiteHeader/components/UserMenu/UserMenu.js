// @flow
import React, { useState } from 'react';
import styled from 'react-emotion';
import { FaRegBell } from 'react-icons/fa';
import { css } from 'emotion';
import { buttonResetCss } from '../../../../../../styles/buttons';
import { RoundButton } from '../../../../../buttons';
import { BREAKPOINTS } from '../../../../../../styles/responsive';
import UserMenuDropdown from './components/UserMenuDropdown/UserMenuDropdown';
import avatar from '../../../../../../avatar.jpg';

const Container = styled('div')`
  display: flex;
  align-items: center;
`;

const menuOpenCss = props => css`
  transition: transform 200ms ease;
  pointer-events: none;
  transform: translate(0, 10px) scale(0.75);
`;

export const backgroundImageCss = props => css`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props.image ? props.image : ''});
`;

const MenuButton = styled('button')`
  ${buttonResetCss};
  ${backgroundImageCss};
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eeeff3;
  margin-left: 8px;
  position: relative;
  z-index: 505;
  transition: transform 100ms ease;

  ${BREAKPOINTS.mobile} {
    width: 34px;
    height: 34px;
    margin-left: 3px;
  }

  ${props => (props.menuOpen ? menuOpenCss : '')};
`;

const NotificationsButton = styled(RoundButton)`
  color: rgb(161, 170, 201);

  &:hover,
  &:focus,
  &:active {
    color: #3f4660;
  }
`;

const MenuContainer = styled('div')`
  position: relative;
`;

type Props = {};

const UserMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <Container>
      <NotificationsButton>
        <FaRegBell />
      </NotificationsButton>
      <MenuContainer>
        <MenuButton image={avatar} onClick={openMenu} menuOpen={menuOpen} />
        {menuOpen && <UserMenuDropdown onClose={closeMenu} />}
      </MenuContainer>
    </Container>
  );
};

export default UserMenu;
