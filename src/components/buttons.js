// @flow

import styled from 'react-emotion';
import { buttonResetCss } from '../styles/buttons';

export const RoundButton = styled('button')`
  ${buttonResetCss};
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
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
