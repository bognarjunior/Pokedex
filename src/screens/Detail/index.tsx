import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Detail = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Detail;
