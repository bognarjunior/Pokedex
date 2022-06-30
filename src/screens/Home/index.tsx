import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
