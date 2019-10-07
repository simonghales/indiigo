// @flow
import React from 'react';
import styled from 'react-emotion';
import CleanPostLayout from '../../components/CleanPostLayout/CleanPostLayout';

const MainContent = styled('section')`
  max-width: 1248px;
  padding: 0 50px;
  margin: 0 auto;
`;

const Post = styled('section')`
  padding: 0 87px;
  max-width: ${700 + 87 * 2}px;
  margin-top: 40px;
  font-family: 'Open Sans';
  font-size: 14px;
  color: #242435;
  letter-spacing: 0.47px;

  h1 {
    font-weight: 600;
    font-size: 26px;
    letter-spacing: 0.87px;
    margin-bottom: 25px;
  }

  p {
    margin-top: 20px;
  }
`;

const LargeImage = styled('div')`
  margin: 25px -10px 25px -10px;
  height: 400px;
  background-color: #f0eefa;
`;

type Props = {};

const CleanPostScreen = () => (
  <MainContent>
    <Post>
      <h1>indiigo dev update #4</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>
        Consectetur adipisicing elit. <br />A adipisci asperiores culpa debitis dignissimos dolores
        eius, <strong>eveniet exercitationem</strong> impedit labore minima nisi nostrum odio
        pariatur, quaerat saepe soluta tempora veniam?
      </p>
      <p>
        A aperiam at, dicta earum error eum ex expedita libero nobis nulla quae quidem quo quod
        reiciendis rem repellat reprehenderit saepe sed!
      </p>
      <LargeImage />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque eum, exercitationem
        obcaecati possimus praesentium quos voluptate? Accusamus atque, dolor eum eveniet, hic,
        libero nobis praesentium recusandae sint vero voluptatum! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Architecto cupiditate distinctio, error esse iste laborum modi
        non placeat possimus provident quae quo ratione recusandae, repellendus voluptatibus?
        Deserunt eius enim suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis deleniti
        distinctio eos facere facilis ipsa ipsam libero natus nulla perspiciatis quae quas quasi
        ratione rem repudiandae tenetur, ut voluptas.
      </p>
    </Post>
  </MainContent>
);

export default CleanPostScreen;
