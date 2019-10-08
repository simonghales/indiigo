// @flow
import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { BREAKPOINTS } from '../../../../../styles/responsive';

const Container = styled('div')`
  padding: 23px 20px 28px 20px;
  cursor: pointer;

  ${BREAKPOINTS.mobile} {
    padding: 15px 10px 12px 10px;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 22px;
    color: #242435;
    letter-spacing: 0.73px;
    margin-bottom: 11px;
  }

  p {
    font-family: 'Open Sans';
    font-size: 13px;
    color: #263141;
    letter-spacing: 0.43px;
    margin-top: 10px;
  }
`;

const ReadMore = styled('div')`
  margin-top: 12px;

  ${BREAKPOINTS.mobile} {
    margin-top: 10px;
  }

  > span {
    font-family: 'Open Sans';
    font-size: 11px;
    color: #9094ac;
    letter-spacing: 0.37px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

type Props = {
  text: string,
};

const TextBody = ({ text }: Props) => (
  <Container>
    <div>
      <ReactMarkdown source={text} />
    </div>
    <ReadMore>
      <span>read more...</span>
    </ReadMore>
  </Container>
);

export default TextBody;
