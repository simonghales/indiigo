// @flow
import React from 'react';
import styled from 'react-emotion';
import { largeHeadingCss } from '../../styles/typography';
import { BREAKPOINTS } from '../../styles/responsive';

const Container = styled('div')`
  ${BREAKPOINTS.desktop} {
    padding: 84px 30px 30px 30px;
  }

  ${BREAKPOINTS.mobile} {
    padding: 32px 16px 50px 16px;
  }

  p {
    margin-top: 15px;
  }
`;

const Heading = styled('h1')`
  ${largeHeadingCss};

  ${BREAKPOINTS.mobile} {
  }
`;

const LargeImage = styled('div')`
  width: 100%;
  height: 50vh;
  background-color: #f2f1fb;
  margin: 30px 0;
`;

const Post = () => (
  <Container>
    <header>
      <Heading>Post title goes here</Heading>
    </header>
    <section>
      <LargeImage />
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, quos, voluptatem!
          Accusamus cumque debitis dolore ea est ex fugiat magnam, nemo obcaecati officiis,
          perspiciatis possimus quas sed velit vero voluptatum?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur culpa, cumque
          cupiditate eaque est et facilis incidunt, iste itaque labore magni molestias nisi odio
          reiciendis unde vero vitae voluptas.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, quos, voluptatem!
          Accusamus cumque debitis dolore ea est ex fugiat magnam, nemo obcaecati officiis,
          perspiciatis possimus quas sed velit vero voluptatum?
        </p>
        <LargeImage />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur culpa, cumque
          cupiditate eaque est et facilis incidunt, iste itaque labore magni molestias nisi odio
          reiciendis unde vero vitae voluptas.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, quos, voluptatem!
          Accusamus cumque debitis dolore ea est ex fugiat magnam, nemo obcaecati officiis,
          perspiciatis possimus quas sed velit vero voluptatum?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur culpa, cumque
          cupiditate eaque est et facilis incidunt, iste itaque labore magni molestias nisi odio
          reiciendis unde vero vitae voluptas.
        </p>
      </div>
    </section>
  </Container>
);

export default Post;
