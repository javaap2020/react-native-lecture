import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';

import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

import api from '../api/list'

// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.

// JSX를 쓸려면 import React from 'react';
// Navigator로 화면을 이동할 때 컴포넌트 속성으로 전달됨
const List = ({ navigation }) => {

  const [list, setList] = useState([]);

  const getList = useCallback(async () => {
    const result = await api.list();
    // console.log(result);
    setList(result.data);
  }, [])

  useEffect(()=>{
    const unsubscribe  = navigation.addListener(
      'focus',
      () => { 
        console.log('focus') 
        getList();
      },
    );

    return unsubscribe;
  }, [navigation]); 

  return (
    <View style={{flex: 1}}>
      <ScrollView 
        contentContainerStyle={
          { flexGrow:1, alignItems:"center", justifyContent:"center"}}
      >
        {
          list.map((item, i) => (
           <ListItem 
            containerStyle={{width:"80%"}} 
            key={i}
            onPress={()=>{navigation.navigate("Details", {id: item.id})}}
            >
             <Avatar source={{uri: item.image}} />
             <ListItem.Content>
               <ListItem.Title>{item.title}</ListItem.Title>
               <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
             </ListItem.Content>
            </ListItem>
          ))
        }
      </ScrollView>
    </View>
  )
}
export default List;