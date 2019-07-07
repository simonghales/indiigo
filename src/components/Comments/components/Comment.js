// @flow
import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import CircleButton from '../../CircleButton';
import { BREAKPOINTS } from '../../../styles/responsive';

const Container = styled('div')`
  ${BREAKPOINTS.mobile} {
    padding-left: 14px;
  }
`;

const Header = styled('header')`
  position: relative;
  line-height: 12px;
`;

const voteClass = css`
  position: absolute;
  top: -2px;
  right: 100%;
  margin-right: 2px;

  ${BREAKPOINTS.mobile} {
    margin-right: 1px;
  }
`;

const HeaderText = styled('span')`
  font-size: 10.5px;
  color: #9096a9;
  letter-spacing: 0.15px;

  span {
    &:not(:last-child) {
      display: inline-block;
      margin-right: 2px;
    }
  }
`;

const Name = styled('span')`
  font-weight: 600;
  font-size: 11.5px;
  color: #0c2340;
  letter-spacing: 0.16px;
`;

const CommentText = styled('div')`
  font-size: 11.5px;
  color: #3f4660;
  letter-spacing: 0.16px;
  margin-top: 3px;
`;

const Options = styled('div')`
  font-weight: 600;
  font-size: 10.5px;
  color: #9096a9;
  letter-spacing: 0.15px;
  margin-top: 3px;
`;

const Comment = () => (
  <Container>
    <Header>
      <CircleButton size={18} className={voteClass}>
        <svg width="8" height="8" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 0l4 8H0z" fill="#A0ABFF" fillRule="evenodd" fillOpacity=".499" />
        </svg>
      </CircleButton>
      <HeaderText>
        <Name>Simon Hales</Name>
        {` `}
        <span>@simonghales</span>
        {` `}
        <span>-</span>
        {` `}
        <span>3h</span>
        {` `}
        <span>-</span>
        {` `}
        <span>5pts</span>
        {` `}
        <span>[-]</span>
      </HeaderText>
    </Header>
    <CommentText>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </CommentText>
    <Options>
      <span>reply</span>
    </Options>
  </Container>
);

export default Comment;
