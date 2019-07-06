// @flow
import React from 'react';
import useReactRouter from 'use-react-router';
import styled from 'react-emotion';
import { FaAngleLeft } from 'react-icons/fa';

const Button = styled('div')`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #a0abff;
  transition: background 250ms ease, color 250ms ease;

  margin-left: -29px;
  position: relative;
  top: -1px;

  &:hover {
    color: #001fff;
    background-color: #ffffff;
  }

  svg {
    display: block;
  }
`;

const ReturnButton = () => {
  const { history } = useReactRouter();
  return (
    <Button onClick={() => history.goBack()}>
      <FaAngleLeft size={15} />
    </Button>
  );
};

export default ReturnButton;
