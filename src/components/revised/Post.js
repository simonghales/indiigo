// @flow
import React from 'react';
import styled from 'react-emotion';
import { BREAKPOINTS } from '../../styles/responsive';

const Container = styled('div')`
  font-family: 'Merriweather', serif;
  font-size: 16px;
  line-height: 1.75;

  ${BREAKPOINTS.desktop} {
    padding-bottom: 100px;
  }

  ${BREAKPOINTS.mobile} {
    font-size: 14px;
  }
`;

const Header = styled('header')`
  margin-top: 72px;
`;

const Heading = styled('h1')`
  font-weight: 600;
  font-size: 2em;

  ${BREAKPOINTS.mobile} {
    font-size: 1.9em;
  }
`;

const Body = styled('section')`
  margin-top: 40px;

  img {
    display: block;
    max-width: 100%;
  }

  p {
    margin: 30px 0;
  }
`;

const ImageWrapper = styled('div')`
  margin: 30px 0;
`;

type Props = {};

const Post = () => (
  <Container>
    <Header>
      <Heading>indiigo - devblog #01</Heading>
    </Header>
    <Body>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis dolorem est
        natus nemo quam quibusdam rem ullam. Culpa ea itaque labore numquam, officia pariatur quidem
        soluta ullam vero vitae!
      </p>
      <ImageWrapper>
        <img src="https://pbs.twimg.com/ext_tw_video_thumb/1147729155020038144/pu/img/2dmNxziOSrKKhJTv?format=jpg&name=medium" />
      </ImageWrapper>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid beatae consequatur
        debitis eius eum exercitationem id in iure labore libero mollitia quam quibusdam tempore,
        tenetur unde veritatis vitae! Quaerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloremque eos esse
        fuga illum inventore iure laudantium libero modi molestiae natus necessitatibus nostrum odit
        officia, praesentium sed, tenetur vel vitae!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam aspernatur
        cum doloremque eaque eligendi est excepturi iusto natus, optio porro quas qui repellat,
        repellendus saepe sequi, temporibus voluptatibus?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid beatae consequatur
        debitis eius eum exercitationem id in iure labore libero mollitia quam quibusdam tempore,
        tenetur unde veritatis vitae! Quaerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloremque eos esse
        fuga illum inventore iure laudantium libero modi molestiae natus necessitatibus nostrum odit
        officia, praesentium sed, tenetur vel vitae!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam aspernatur
        cum doloremque eaque eligendi est excepturi iusto natus, optio porro quas qui repellat,
        repellendus saepe sequi, temporibus voluptatibus?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid beatae consequatur
        debitis eius eum exercitationem id in iure labore libero mollitia quam quibusdam tempore,
        tenetur unde veritatis vitae! Quaerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloremque eos esse
        fuga illum inventore iure laudantium libero modi molestiae natus necessitatibus nostrum odit
        officia, praesentium sed, tenetur vel vitae!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam aspernatur
        cum doloremque eaque eligendi est excepturi iusto natus, optio porro quas qui repellat,
        repellendus saepe sequi, temporibus voluptatibus?
      </p>
    </Body>
  </Container>
);

export default Post;
