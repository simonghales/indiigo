// @flow
import React from 'react';
import styled from 'react-emotion';

const Container = styled('div')`
  position: relative;
  padding: 0 5px 0 8px;
`;

const List = styled('ul')`
  overflow: hidden;
  max-width: 100%;
`;

const ListItem = styled('li')`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: italic;
  font-size: 12px;
  color: #9096a9;
  letter-spacing: 0.17px;

  &:not(:first-child) {
    margin-top: 5px;
  }
`;

const BeforeQuote = styled('div')`
  position: absolute;
  top: -13px;
  left: -4px;
`;

const AfterQuote = styled('div')`
  position: absolute;
  bottom: -11px;
  right: -4px;
`;

const QuotedComments = ({ ...otherProps }) => (
  <Container {...otherProps}>
    <BeforeQuote>
      <svg width="10" height="8" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.29 4.782v2.145C4.29 7.52 3.81 8 3.218 8H1.073C.48 8 0 7.52 0 6.927V2.995A2.866 2.866 0 0 1 2.86.135h.358a.36.36 0 0 1 .357.357v.715a.36.36 0 0 1-.357.358H2.86c-.788 0-1.43.642-1.43 1.43v.179c0 .296.24.536.536.536h1.252c.592 0 1.072.48 1.072 1.072zm5.005 0v2.145C9.295 7.52 8.815 8 8.223 8H6.078c-.593 0-1.073-.48-1.073-1.073V2.995a2.866 2.866 0 0 1 2.86-2.86h.358a.36.36 0 0 1 .357.357v.715a.36.36 0 0 1-.357.358h-.358c-.788 0-1.43.642-1.43 1.43v.179c0 .296.24.536.536.536h1.252c.592 0 1.072.48 1.072 1.072z"
          fill="#D5D3E5"
          fillRule="nonzero"
        />
      </svg>
    </BeforeQuote>
    <AfterQuote>
      <svg width="10" height="8" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.29 1.207V5.14A2.866 2.866 0 0 1 1.43 8h-.357a.36.36 0 0 1-.358-.358v-.715a.36.36 0 0 1 .358-.357h.357c.788 0 1.43-.642 1.43-1.43v-.179a.536.536 0 0 0-.536-.536H1.073C.48 4.425 0 3.945 0 3.352V1.207C0 .615.48.135 1.073.135h2.145c.592 0 1.072.48 1.072 1.072zm5.005 0V5.14A2.866 2.866 0 0 1 6.435 8h-.357a.36.36 0 0 1-.358-.358v-.715a.36.36 0 0 1 .358-.357h.357c.788 0 1.43-.642 1.43-1.43v-.179a.536.536 0 0 0-.536-.536H6.078c-.593 0-1.073-.48-1.073-1.073V1.207c0-.592.48-1.072 1.073-1.072h2.145c.592 0 1.072.48 1.072 1.072z"
          fill="#D5D3E5"
          fillRule="nonzero"
        />
      </svg>
    </AfterQuote>
    <List>
      <ListItem>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores facere facilis
        nemo quidem?
      </ListItem>
      <ListItem>
        Expedita fuga inventore minus neque, nulla provident quae quam quod repellat rerum
        temporibus, vitae.
      </ListItem>
      <ListItem>
        Laboriosam nihil numquam pariatur perspiciatis, quidem quisquam quos, rem repellendus
        repudiandae sed, tempora voluptates?
      </ListItem>
    </List>
  </Container>
);

export default QuotedComments;
