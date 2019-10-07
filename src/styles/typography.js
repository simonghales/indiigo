// @flow

import { css } from 'emotion';
import { BREAKPOINTS } from './responsive';

export const detailsTextCss = css`
  font-weight: 600;
  font-size: 11px;
  color: #9096a9;
  letter-spacing: 0.15px;
`;

export const largeHeadingCss = css`
  font-weight: 600;
  font-size: 24px;
  color: #0c2340;
  letter-spacing: 0.33px;

  ${BREAKPOINTS.mobile} {
    font-size: 18px;
  }
`;

export const mediumHeadingCss = css`
  font-weight: 600;
  font-size: 16px;
  color: #0c2340;
  letter-spacing: 0.22px;

  ${BREAKPOINTS.mobile} {
    font-size: 14px;
  }
`;

export const smallBoldCss = css`
  font-weight: 700;
  font-size: 11.5px;
  color: #a0abff;
  letter-spacing: 0.16px;
`;

export const smallTextCss = css`
  font-size: 10px;
  color: #9094ac;
  letter-spacing: 0.33px;
`;
