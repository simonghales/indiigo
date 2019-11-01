// @flow
import React from 'react';
import styled from 'react-emotion';
import OutsideClickHandler from 'react-outside-click-handler';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BackShadow from '../../../../../../../BackShadow';

const Container = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 5px;
  z-index: 500;
`;

const Menu = styled('section')`
  width: 200px;
  background-color: white;
  padding: 5px 0;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(38, 49, 65, 0.05);

  a {
    display: flex;
    padding: 11px 14px 11px 20px;
    font-family: 'Open Sans';
    font-weight: 600;
    transition: background 300ms ease;
    align-items: center;
    justify-content: space-between;

    &:focus,
    &:hover {
      background-color: rgb(244, 245, 250);
      transition-duration: 100ms;
    }

    &:active {
      background-color: #eeeff3;
    }

    svg {
      color: rgb(161, 170, 201);
      display: block;
    }
  }
`;

type Props = {
  onClose: () => void,
};

const UserMenuDropdown = ({ onClose }: Props) => (
  <OutsideClickHandler onOutsideClick={onClose}>
    <Container>
      <BackShadow>
        <Menu>
          <nav>
            <ul>
              <li>
                <a onClick={onClose}>Profile</a>
              </li>
              <li>
                <Link to="/post" onClick={onClose}>
                  <span>Create Post</span>
                  <FaPlus />
                </Link>
              </li>
            </ul>
          </nav>
        </Menu>
      </BackShadow>
    </Container>
  </OutsideClickHandler>
);

export default UserMenuDropdown;
