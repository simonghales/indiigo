// @flow
import React from 'react';
import styled from 'react-emotion';

const Button = styled('div')`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #a0abff;
  transition: background 250ms ease, color 250ms ease;

  &:hover {
    color: #001fff;
    background-color: #ffffff;

    svg {
      path {
        fill: #001fff;
      }
    }
  }

  svg {
    display: block;
    fill: currentColor;

    path {
      fill: currentColor;
    }
  }
`;

type Props = {
  children: any,
  size?: number,
};

const CircleButton = ({ children, size, ...otherProps }: Props) => (
  <Button {...otherProps} size={size}>
    {children}
  </Button>
);

CircleButton.defaultProps = {
  size: 24,
};

export default CircleButton;
