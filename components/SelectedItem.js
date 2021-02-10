import React from 'react';
import { View, Text } from 'react-native';

// 선택한 아이템 한개를 속성으로 내려 받음
const Selecteditem = ({ item }) => {
  return (
    <View>
      <Text>{item.id} {item.title}</Text>
    </View>
  )
}

export default Selecteditem;