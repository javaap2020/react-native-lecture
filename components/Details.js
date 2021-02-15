import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'

import { useDispatch, useSelector } from 'react-redux'
import { addAction } from '../redux/actions'
import { removeAction } from '../redux/actions'

import { LISTDATA } from '../shared/list'

// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.

// JSX를 쓸려면 import React from 'react';
// Navigator로 화면을 이동할 때 컴포넌트 속성으로 route, navigation이 전달됨
const Details = ( { route, navigation }) => {

  // navigation.navigate("스크린이름", 매개변수)
  console.log("--detail");
  console.log(route.params);  // navigate로 넘어온 매개변수

  // const id = route.params.id;
  const { id } = route.params;

  const item = LISTDATA.filter(item => item.id == id)[0];
  console.log(item);

  const dispatch = useDispatch();

  const actions = useSelector(state => state.actions);
  console.log("--actions--");
  console.log(actions);

  const isExistedAction = actions.filter(item => item.id == id).length > 0 ? true : false;
  console.log("--isExistedAction--");
  console.log(isExistedAction);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider/>
        <Card.Image source={{uri: item.image}}>
        </Card.Image>
        <Card.Divider/>        
        <Text style={{marginBottom: 10}}>
          {item.description}
        </Text>
        {
          isExistedAction 
            ?
            <Button
              onPress={()=>{dispatch(removeAction(id))}}
              icon={<Icon name='close' type='ionicon' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"gray"}}
              title='REMOVE' 
            /> 
            :
            <Button
              onPress={()=>{dispatch(addAction(item))}}
              icon={<Icon name='checkmark' type='ionicon' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"tomato"}}
              title='ACTION' 
            />    
        }
            
      </Card>
    </View>
  )
}
export default Details;