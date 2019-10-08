// @flow
import React from 'react';
import styled from 'react-emotion';
import art from '../../../../../art.png';
import { BREAKPOINTS } from '../../../../../styles/responsive';
import type { ImagePreviewMdl } from '../../../../../data/posts';
import { getImagePreviewDimensions, getImagePreviewUrl } from '../../../../../data/posts';

const Container = styled('div')`
  height: ${props => 500 * props.sizeRatio}px;
  max-height: 625px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  overflow: hidden;

  ${BREAKPOINTS.mobile} {
    height: auto;
    max-height: 125vw;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

type Props = {
  imagePreview: ImagePreviewMdl,
};

const getSizeRatio = (width: number, height: number): number => {
  return height / width;
};

const ImageBody = ({ imagePreview }: Props) => {
  const [width, height] = getImagePreviewDimensions(imagePreview);
  const url = getImagePreviewUrl(imagePreview);
  const sizeRatio = getSizeRatio(width, height);
  return (
    <Container sizeRatio={sizeRatio}>
      <img src={url} alt="user uploaded media" />
    </Container>
  );
};

export default ImageBody;
