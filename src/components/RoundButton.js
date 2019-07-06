// @flow
import React from 'react';
import styled from 'react-emotion';
import { css, cx } from 'emotion';
import { buttonResetCss } from '../styles/buttons';
import { lightFillCss, roundBackShadowCss } from '../styles/shared/fills';

const classNames = {
  button: 'button',
};

const Button = styled('button')`
  ${buttonResetCss};
  position: relative;
  border-radius: 50%;
  cursor: pointer;

  &::before {
    ${roundBackShadowCss};
    box-shadow: 0 2px 14px 0 rgba(26, 40, 75, 0.11);
    content: '';
  }
`;

const Content = styled('div')`
  ${lightFillCss};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  transition: box-shadow 250ms ease;

  .${classNames.button}:hover & {
    box-shadow: 0 1px 2px 0 rgba(26, 40, 75, 0.07);
  }
`;

type Props = {
  className?: string,
  children: any,
};

const RoundButton = ({ className, children }: Props) => (
  <Button className={cx(classNames.button, className)}>
    <Content>{children}</Content>
  </Button>
);

RoundButton.defaultProps = {
  className: '',
};

export default RoundButton;

const IconWrapper = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a0abff;
  position: relative;
`;

const RoundCircle = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background-color: #ffffff;
    height: 0;
    transform: rotate(45deg) translate(23px, 10px);
    transform-origin: top right;
    transition: height 400ms ease;

    .${classNames.button}:hover & {
      height: 120%;
      transition: height 250ms ease;
    }
  }
`;

export const RoundIconButton = ({ children }) => (
  <RoundButton>
    <RoundCircle />
    <IconWrapper>{children}</IconWrapper>
  </RoundButton>
);
