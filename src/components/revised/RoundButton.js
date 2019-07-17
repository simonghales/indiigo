// @flow
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'react-emotion';

const Button = styled('button')`
  background: none;
  border: 0;
  font: inherit;
  margin: 0;
  padding: 0;
  color: inherit;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: color 200ms ease;

  &:active,
  &:hover {
    color: rgb(83, 82, 98);
  }

  svg {
    display: block;
  }
`;

const Shape = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
`;

const Content = styled('div')`
  position: relative;
  pointer-events: none;
`;

type Props = {
  children: any,
};

const variants = {
  initial: {
    scale: 0.5,
    opacity: 0,
    backgroundColor: 'rgb(244, 245, 252)',
  },
  hovered: {
    opacity: 1,
    scale: 1,
    backgroundColor: 'rgb(244, 245, 252)',
  },
  tapped: {
    opacity: 1,
    scale: 0.85,
    backgroundColor: 'rgb(216, 221, 249)',
  },
};

const RoundButton = ({ children, ...otherProps }: Props) => {
  const [hovered, setHovered] = useState(false);
  const [mousedown, setMousedown] = useState(false);
  return (
    <Button
      {...otherProps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setMousedown(false);
      }}
      onMouseDown={() => setMousedown(true)}
      onMouseUp={() => setMousedown(false)}
    >
      <Shape
        initial={{ ...variants.initial }}
        variants={variants}
        animate={mousedown ? 'tapped' : hovered ? 'hovered' : 'initial'}
      />
      <Content>{children}</Content>
    </Button>
  );
};

export default RoundButton;
