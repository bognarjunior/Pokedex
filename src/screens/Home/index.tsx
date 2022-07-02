import React from 'react';
import {List, Container, Content} from './styles';

import Header from './components/Header';
import Title from './components/Title';

const Home = ({navigation}) => {
  return (
    <Container>
      <Header />
      <Content>
        <Title />
        <List data={[]} renderItem={() => {}} />
      </Content>
    </Container>
  );
};

export default Home;
