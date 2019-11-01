// @flow
import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import TextBody from './TextBody';
import boys from '../../../../../boys.jpg';
import type { TextImagePreviewMdl } from '../../../../../data/posts';
import { getImagePreviewUrl } from '../../../../../data/posts';
import PostLink from './PostLink';

const Image = styled('div')`
  height: 200px;
  background-color: grey;
  border-radius: 4px 4px 0 0;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.url});
`;

type Props = {
  preview: TextImagePreviewMdl,
};

const TextImageBody = ({ preview }: Props) => {
  const { banner, preview: text } = preview;
  const url = getImagePreviewUrl(banner);
  return (
    <React.Fragment>
      <Image url={url} />
      <TextBody text={text} />
    </React.Fragment>
  );
};

export default TextImageBody;
