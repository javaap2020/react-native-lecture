import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

import { removeAction } from '../redux/actions'

const Actions = ({navigation}) => {

  const actions = useSelector(state => state.actions);
  console.log("--actions state in Actions Component");
  console.log(actions);

  const dispatch = useDispatch();

  return(
    <View style={{flex:1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
      {
        actions.map((item, i) => (
          <ListItem containerStyle={{width:"80%"}} key={i} onPress={()=>{navigation.navigate("Details", {id: item.id})}}>
            <Avatar source={{uri: item.image}} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon name='close' type='ionicon' color='gray' onPress={()=>{dispatch(removeAction(item.id))}} />
          </ListItem>
        ))
      }
      </ScrollView>
    </View>
  )
}

export default Actions;