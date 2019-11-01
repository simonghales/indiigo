// @flow
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: any,
};

const PostLink = ({ children }: Props) => <Link to="/post/id">{children}</Link>;

export default PostLink;
