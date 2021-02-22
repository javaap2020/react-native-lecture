import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';

import { LISTDATA } from '../shared/list'

import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

import api from '../api/list'

// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.

// JSX를 쓸려면 import React from 'react';
// Navigator로 화면을 이동할 때 컴포넌트 속성으로 전달됨
const List = ({ navigation }) => {

  // 백엔드에 API요청후 응답 받은 데이터
  // 데이터를 받으면 화면을 다시 렌더링한다.
  // state 처리
  const [list, setList] = useState([]);  

  //, [] <- 함수가 재생성될 조건
  //, [] <- 컴포넌트가 처음 마운트 됐을 때만 생성
  //, [data] <- data라는 객체/변수가 생성되거나 바뀔 때 함수가 생성
  // memoizing function 정의
  const getList = useCallback(async () => {
    const result = await api.list();
    console.log(result.data);
    // state를 갱신해서 다시 그리기
    setList(result.data);
  }, [])

  // useEffect
  // 특정 조건에 맞게 실행하는 함수를 정의
  // , [] 컴포넌트가 처음 마운트 됐을 때 실행되는 함수를 정의
  // , [data] <- data라는 객체/변수가 생성되거나 바뀔 때 함수가 실행
  // componentDidMount : event hook
  // useEffect(()=> {
  //   getList();
  // }, [])

  useEffect(()=>{
    // navigation 이벤트 리스너를 생성
    // 반환 값이 이벤트 리스너 해제 함수
    const unsubscribe = navigation.addListener(
      'focus',
      () => {
        console.log('focus')
        getList();
      }
    )
    
    // clean-up function
    // 객체 소멸 함수
    // useEffect(()=>{ 
    //   ...
    //  
    //  return 함수
    // }, [])
    
    // component가 unmount 되는 시점에 clean-up 함수가 실행됨


    return unsubscribe;

    // return () => {
    //   navigation.removeListener(unsubscribe);
    // }
  }, [navigation])

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