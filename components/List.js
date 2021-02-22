import React from 'react';
import { View } from 'react-native';

import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.

// JSX를 쓸려면 import React from 'react';
// Navigator로 화면을 이동할 때 컴포넌트 속성으로 전달됨
const List = ({ navigation, list }) => {
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
            // stack -> stack 
            // .navigate(스택스크린이름, 매개변수객체)
            onPress={()=>{navigation.navigate("Details", {id: item.id})}}
            
            // A tab> a stack -> B tab> a stack 
            // https://reactnavigation.org/docs/nesting-navigators/#passing-params-to-a-screen-in-a-nested-navigator
            // .navigate(탭스크린이름, {params: 매개변수객체, screen: 스택스크린이름})
            // onPress={()=>{navigation.navigate("Tasks", {params: {id: item.id}, screen: "Tasks"})}}
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