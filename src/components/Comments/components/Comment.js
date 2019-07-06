// @flow
import React from 'react';
import styled from 'react-emotion';

const Header = styled('header')`
  position: relative;
  line-height: 12px;
`;

const Vote = styled('div')`
  position: absolute;
  top: -1px;
  right: 100%;
  margin-right: 2px;
  padding: 3px 3px;
  cursor: pointer;
  border-radius: 50%;

  svg {
    display: block;
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
  <div>
    <Header>
      <Vote>
        <svg width="8" height="8" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 0l4 8H0z" fill="#A0ABFF" fillRule="evenodd" fillOpacity=".499" />
        </svg>
      </Vote>
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
  </div>
);

export default Comment;
