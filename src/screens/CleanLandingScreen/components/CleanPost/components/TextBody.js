// @flow
import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { BREAKPOINTS } from '../../../../../styles/responsive';

const Container = styled('div')`
  > a {
    display: block;
    padding: 23px 20px 28px 20px;
    cursor: pointer;

    ${BREAKPOINTS.mobile} {
      padding: 15px 10px 12px 10px;
    }
  }

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

  a {
    font-family: 'Open Sans';
    font-size: 11px;
    color: #9094ac;
    letter-spacing: 0.37px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

type Props = {};

const TextBody = () => (
  <Container>
    <Link to="/post/id">
      <h4>indiigo dev update #4</h4>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla massa, venenatis
          ultrices aliquet sed, scelerisque nec orci.
        </p>
        <p>Donec mauris est, finibus nec neque sed, sagittis mattis ex.</p>
      </div>
      <ReadMore>
        <a>read more...</a>
      </ReadMore>
    </Link>
  </Container>
);

export default TextBody;
