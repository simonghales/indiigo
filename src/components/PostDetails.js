// @flow
import React from 'react';
import TextTruncate from 'react-text-truncate';
import styled from 'react-emotion';
import { detailsTextCss } from '../styles/typography';
import { BREAKPOINTS } from '../styles/responsive';

const Info = styled('section')`
  margin: 11px 0 20px 0;

  ${BREAKPOINTS.mobile} {
    margin-top: 5px;
    margin-bottom: 0;
  }

  p {
  }
`;

const Details = styled('div')`
  ${detailsTextCss};
  margin-top: 4px;

  ${BREAKPOINTS.mobile} {
    margin-top: 2px;
  }

  span {
    &:not(:last-child) {
      &::after {
        content: '‧';
        display: inline-block;
        margin: 0 7px;
      }
    }
  }
`;

type Props = {
  truncate?: boolean,
};

const PostDetails = ({ truncate }: Props) => (
  <Info>
    <p>
      {truncate ? (
        <TextTruncate
          line={2}
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam."
          truncateText="…"
        />
      ) : (
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam.'
      )}
    </p>
    <Details>
      <span>posted today</span>
      <span>options</span>
    </Details>
  </Info>
);

export default PostDetails;
