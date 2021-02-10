import React from 'react';
import { Text, View } from 'react-native';

// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.

// JSX를 쓸려면 import React from 'react';
// Navigator로 화면을 이동할 때 컴포넌트 속성으로 route, navigation이 전달됨
const Details = ( { route, navigation }) => {

  // navigation.navigate("스크린이름", 매개변수)
  console.log("--detail");
  console.log(route.params);  // navigate로 넘어온 매개변수

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Details</Text>
    </View>
  )
}
export default Details;