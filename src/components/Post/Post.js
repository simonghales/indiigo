// @flow
import React from 'react';
import type { PostMdl } from '../../data/posts';
import {
  CleanImagePost,
  CleanTextImagePost,
  CleanTextPost,
} from '../../screens/CleanLandingScreen/components/CleanPost/CleanPost';
import { getPostContentType } from '../../data/posts';

type Props = {
  data: PostMdl,
};

const Post = ({ data }: Props) => {
  const contentType = getPostContentType(data);
  if (contentType === 'image') {
    return <CleanImagePost data={data} />;
  }
  if (contentType === 'textImage') {
    return <CleanTextImagePost data={data} />;
  }
  return <CleanTextPost data={data} />;
};

export default Post;
