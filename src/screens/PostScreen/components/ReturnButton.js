// @flow
import React from 'react';
import useReactRouter from 'use-react-router';
import styled from 'react-emotion';
import { FaAngleLeft } from 'react-icons/fa';
import { css } from 'emotion';
import CircleButton from '../../../components/CircleButton';

const buttonClass = css`
  margin-left: -29px;
  position: relative;
  top: -1px;
`;

const ReturnButton = () => {
  const { history } = useReactRouter();
  return (
    <CircleButton className={buttonClass} onClick={() => history.goBack()}>
      <FaAngleLeft size={15} />
    </CircleButton>
  );
};

export default ReturnButton;
