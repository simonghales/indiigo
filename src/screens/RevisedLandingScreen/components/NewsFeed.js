// @flow
import React, { useEffect, useState } from 'react';
import styled from 'react-emotion';
import PostCard, { PlaceholderPostCard } from './PostCard';
import { BREAKPOINTS } from '../../../styles/responsive';

const Container = styled('section')`
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 80px;

  ${BREAKPOINTS.mobile} {
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const Item = styled('div')`
  margin-top: 60px;

  ${BREAKPOINTS.mobile} {
    margin-top: 40px;
  }
`;

const fetchPosts = () => {
  return fetch('https://us-central1-indiigo.cloudfunctions.net/fetchPopularFeed').then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject();
  });
};

const NewsFeed = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts().then(response => {
      console.log('response', response);
      setPosts(response.feed);
      setLoading(false);
    });
  }, []);
  return (
    <Container>
      {loading && (
        <Item>
          <PlaceholderPostCard />
        </Item>
      )}
      {posts.map((post, index) => (
        <Item key={index.toString()}>
          <PostCard />
        </Item>
      ))}
    </Container>
  );
};

export default NewsFeed;
