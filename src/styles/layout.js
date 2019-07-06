// @flow

import { css } from 'emotion';

export const gridLayoutCss = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 30px;
`;

export const maxWidthLayoutCss = css`
  max-width: 1350px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
`;
