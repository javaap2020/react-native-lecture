import React from 'react';
import { View } from 'react-native';
import { LISTDATA } from '../shared/list'

// https://reactnativeelements.com/docs
import { ListItem } from 'react-native-elements'

const SearchList = ({ navigation, keyword }) => {
  
  let list = LISTDATA;
  console.log("--search list--")
  console.log(list)

  console.log("--keyword--")
  console.log(keyword)
  
  if(keyword && keyword.length > 1){
    list = list.filter(item => item.title.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) > -1 )

    return(
      list.map((item, i) => (
        <ListItem containerStyle={{width:"80%"}} key={i} bottomDivider onPress={()=>{navigation.navigate('Details', {id: item.id})}}>
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))
    )  
  } else {
    return (
      <></>
    )
  }
}

export default SearchList;