// @flow
import React from 'react';
import styled from 'react-emotion';
import { css, cx } from 'emotion';
import { FaRegComments, FaRegHeart } from 'react-icons/fa';
import { buttonResetCss } from '../styles/buttons';
import { lightFillCss, roundBackShadowCss } from '../styles/shared/fills';
import { vibrantColor } from '../styles/colors';
import { BREAKPOINTS } from '../styles/responsive';

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

  ${BREAKPOINTS.mobile} {
    border-width: 2px;
  }

  .${classNames.button}:hover & {
    box-shadow: 0 1px 2px 0 rgba(26, 40, 75, 0.07);
  }
`;

type Props = {
  className?: string,
  contentClassName?: string,
  children: any,
};

const RoundButton = ({ className, contentClassName, children, ...otherProps }: Props) => (
  <Button className={cx(classNames.button, className)} {...otherProps}>
    <Content className={contentClassName}>{children}</Content>
  </Button>
);

RoundButton.defaultProps = {
  className: '',
  contentClassName: '',
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
  transition: color 250ms ease;

  &:hover {
    color: ${vibrantColor};
  }
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

const rectangleButtonClass = css`
  width: 100%;

  &::before {
    border-radius: 10px;
  }
`;

const rectangleButtonContentClass = css`
  width: 100%;
  border-radius: 10px;
`;

const rectangleUnderlayClass = css`
  border-radius: 10px;

  &::before {
    height: unset;
    transform: translateX(100%);
    transition: transform 400ms ease;

    .${classNames.button}:hover & {
      height: unset;
      transform: translateX(0);
      transition: transform 250ms ease;
    }
  }
`;

export const RoundIconButton = ({ children, underlayClassName = '', ...otherProps }) => (
  <RoundButton {...otherProps}>
    <RoundCircle className={underlayClassName} />
    <IconWrapper>{children}</IconWrapper>
  </RoundButton>
);

export const RectangleButton = ({ children, ...otherProps }) => (
  <RoundIconButton
    className={rectangleButtonClass}
    contentClassName={rectangleButtonContentClass}
    underlayClassName={rectangleUnderlayClass}
    {...otherProps}
  >
    {children}
  </RoundIconButton>
);

const heartClass = css`
  position: relative;
  top: 1.5px;
`;

export const LikeButton = () => (
  <RoundIconButton>
    <FaRegHeart className={heartClass} size={17} />
  </RoundIconButton>
);

const commentsClass = css`
  position: relative;
  top: 1px;
`;

export const CommentsButton = () => (
  <RoundIconButton>
    <FaRegComments className={commentsClass} size={20} />
  </RoundIconButton>
);
